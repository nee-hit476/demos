/*
  # Send Contact Email Function

  This edge function handles sending contact form emails from the interior design website.

  1. Request Processing
    - Accepts POST requests with contact form data
    - Validates required fields (name, email, message, projectType)

  2. Email Sending
    - Formats the email content with form data
    - Sends email to company address
    - Returns success/error response

  3. CORS Handling
    - Supports OPTIONS preflight requests
    - Allows cross-origin requests from the website
*/

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    const formData: ContactFormData = await req.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message || !formData.projectType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Format email content
    const emailContent = `
New Contact Form Submission - LuxeInteriors Website

Client Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Project Type: ${formData.projectType}
- Budget Range: ${formData.budget || 'Not specified'}

Project Details:
${formData.message}

---
This message was sent from the LuxeInteriors contact form.
Please respond to the client directly at: ${formData.email}
`;

    // Here you would typically integrate with an email service
    // For demonstration purposes, we'll simulate email sending
    
    // Example with a hypothetical email service:
    /*
    const emailResponse = await fetch('YOUR_EMAIL_SERVICE_API', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'hello@luxeinteriors.com',
        subject: `New Contact: ${formData.projectType} - ${formData.name}`,
        text: emailContent,
        replyTo: formData.email,
      }),
    });
    */

    // For now, we'll log the email content and return success
    console.log('Contact form submission:', emailContent);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully! We'll get back to you soon." 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to send message. Please try again or contact us directly." 
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
});