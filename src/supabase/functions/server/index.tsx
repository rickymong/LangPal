import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use("*", cors());
app.use("*", logger(console.log));

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// Waitlist signup endpoint
app.post("/make-server-9428597d/waitlist", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, consent } = body;

    if (!name || !email || !phone || !consent) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store in KV store
    const timestamp = new Date().toISOString();
    const key = `waitlist:${email}:${timestamp}`;
    
    await kv.set(key, {
      name,
      email,
      phone,
      consent,
      timestamp,
    });

    console.log(`Waitlist signup stored: ${key}`);
    
    return c.json({ success: true, message: "Successfully joined waitlist!" });
  } catch (error) {
    console.error("Error storing waitlist signup:", error);
    return c.json({ error: "Failed to process waitlist signup" }, 500);
  }
});

// Contact form submission endpoint
app.post("/make-server-9428597d/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message, consent } = body;

    if (!name || !email || !subject || !message || !consent) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store in KV store
    const timestamp = new Date().toISOString();
    const key = `contact:${email}:${timestamp}`;
    
    await kv.set(key, {
      name,
      email,
      subject,
      message,
      consent,
      timestamp,
    });

    console.log(`Contact form submission stored: ${key}`);
    
    // Send email using Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return c.json({ 
        success: true, 
        message: "Message received! (Email service not configured)" 
      });
    }

    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "LangPal Contact Form <onboarding@resend.dev>",
          to: ["teamlangpal@gmail.com"],
          subject: `LangPal Contact Form: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${timestamp}</small></p>
            <p><small>Consent given: ${consent ? 'Yes' : 'No'}</small></p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error(`Email sending failed: ${errorText}`);
        return c.json({ 
          success: true, 
          message: "Message received! (Email delivery pending)" 
        });
      }

      const emailData = await emailResponse.json();
      console.log(`Email sent successfully: ${emailData.id}`);
      
      return c.json({ 
        success: true, 
        message: "Message sent successfully! We'll get back to you soon." 
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return c.json({ 
        success: true, 
        message: "Message received! We'll get back to you soon." 
      });
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ error: "Failed to send message" }, 500);
  }
});

// Export waitlist data (for dev access)
app.get("/make-server-9428597d/export/waitlist", async (c) => {
  try {
    const waitlistEntries = await kv.getByPrefix("waitlist:");
    
    // Convert to CSV format
    const csvHeader = "Name,Email,Phone,Consent,Timestamp\n";
    const csvRows = waitlistEntries.map((entry: any) => {
      return `"${entry.name}","${entry.email}","${entry.phone}","${entry.consent}","${entry.timestamp}"`;
    }).join("\n");
    
    const csvContent = csvHeader + csvRows;
    
    return new Response(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=langpal-waitlist.csv",
      },
    });
  } catch (error) {
    console.error("Error exporting waitlist:", error);
    return c.json({ error: "Failed to export waitlist" }, 500);
  }
});

// Export contact form data (for dev access)
app.get("/make-server-9428597d/export/contact", async (c) => {
  try {
    const contactEntries = await kv.getByPrefix("contact:");
    
    // Convert to CSV format
    const csvHeader = "Name,Email,Subject,Message,Consent,Timestamp\n";
    const csvRows = contactEntries.map((entry: any) => {
      return `"${entry.name}","${entry.email}","${entry.subject}","${entry.message}","${entry.consent}","${entry.timestamp}"`;
    }).join("\n");
    
    const csvContent = csvHeader + csvRows;
    
    return new Response(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=langpal-contacts.csv",
      },
    });
  } catch (error) {
    console.error("Error exporting contacts:", error);
    return c.json({ error: "Failed to export contacts" }, 500);
  }
});

// Team application submission endpoint
app.post("/make-server-9428597d/team-application", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, position, marketingConsent } = body;

    if (!name || !email || !phone || !position) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store in KV store
    const timestamp = new Date().toISOString();
    const key = `team-application:${email}:${timestamp}`;
    
    await kv.set(key, {
      name,
      email,
      phone,
      position,
      marketingConsent: marketingConsent || false,
      timestamp,
    });

    console.log(`Team application stored: ${key}`);
    
    // Send email using Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "LangPal Team Applications <onboarding@resend.dev>",
            to: ["teamlangpal@gmail.com"],
            subject: `New Team Application: ${position}`,
            html: `
              <h2>New Team Application Received</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Position:</strong> ${position}</p>
              <hr>
              <p><small>Submitted at: ${timestamp}</small></p>
              <p><small>Marketing consent: ${marketingConsent ? 'Yes' : 'No'}</small></p>
            `,
          }),
        });

        if (emailResponse.ok) {
          const emailData = await emailResponse.json();
          console.log(`Team application email sent: ${emailData.id}`);
        }
      } catch (emailError) {
        console.error("Error sending team application email:", emailError);
      }
    }
    
    return c.json({ 
      success: true, 
      message: "Application submitted successfully! We'll review it and get back to you soon." 
    });
  } catch (error) {
    console.error("Error processing team application:", error);
    return c.json({ error: "Failed to submit application" }, 500);
  }
});

// Export team applications (for dev access)
app.get("/make-server-9428597d/export/team-applications", async (c) => {
  try {
    const applications = await kv.getByPrefix("team-application:");
    
    // Convert to CSV format
    const csvHeader = "Name,Email,Phone,Position,Marketing Consent,Timestamp\n";
    const csvRows = applications.map((entry: any) => {
      return `"${entry.name}","${entry.email}","${entry.phone}","${entry.position}","${entry.marketingConsent}","${entry.timestamp}"`;
    }).join("\n");
    
    const csvContent = csvHeader + csvRows;
    
    return new Response(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=langpal-team-applications.csv",
      },
    });
  } catch (error) {
    console.error("Error exporting team applications:", error);
    return c.json({ error: "Failed to export team applications" }, 500);
  }
});

Deno.serve(app.fetch);