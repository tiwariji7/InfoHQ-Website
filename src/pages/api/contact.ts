export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return new Response(JSON.stringify({ error: 'Invalid JSON request body.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const {
      fullName,
      email,
      company,
      phone,
      projectType,
      serviceType,
      projectBrief,
      idea,
      budget,
      timeline,
      preferredContact
    } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return new Response(JSON.stringify({ error: 'Full name is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return new Response(JSON.stringify({ error: 'A valid email address is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const selectedService = (serviceType || projectType || '').trim();
    if (!selectedService) {
      return new Response(JSON.stringify({ error: 'Please select what you need help with.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const requirementText = (projectBrief || idea || '').trim();
    if (!requirementText || requirementText.length < 10) {
      return new Response(JSON.stringify({ error: 'Please share your idea or requirement (at least 10 characters).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Determine target recipient based on inquiry type per functional-tech-requirements.md
    const isServiceSales = [
      'AI / Automation',
      'AI Solution',
      'Custom Software',
      'Cloud / DevOps & Infrastructure',
      'Cloud & DevOps',
      'Business Process / CRM',
      'Monthly Retainer',
      'SaaS'
    ].includes(selectedService);

    const targetEmail = isServiceSales ? 'services@infohq.in' : 'contact@infohq.in';

    const subject = `[InfoHQ Consultation] ${selectedService} inquiry from ${fullName.trim()}`;
    const messageContent = `
New Free Consultation Request Received via infohq.in:
------------------------------------------------------
Full Name: ${fullName.trim()}
Work Email: ${email.trim()}
Phone / WhatsApp: ${phone && phone.trim() ? phone.trim() : 'Not provided'}
Company Name: ${company && company.trim() ? company.trim() : 'Not provided'}
Service Needed: ${selectedService}
Estimated Budget: ${budget && budget.trim() ? budget.trim() : 'Not provided'}
Timeline: ${timeline && timeline.trim() ? timeline.trim() : 'Not provided'}
Preferred Way to Connect: ${preferredContact && preferredContact.trim() ? preferredContact.trim() : 'Email'}
Target Recipient: ${targetEmail}

Idea / Requirement Details:
${requirementText}

------------------------------------------------------
Submitted at: ${new Date().toISOString()}
`.trim();

    // Outbound transmission via MailChannels (natively supported on Cloudflare Workers/Pages)
    try {
      const mailChannelsRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: targetEmail, name: 'InfoHQ Engineering Team' }]
            }
          ],
          from: {
            email: 'noreply@infohq.in',
            name: 'InfoHQ Inbound Dispatcher'
          },
          reply_to: {
            email: email.trim(),
            name: fullName.trim()
          },
          subject,
          content: [
            {
              type: 'text/plain',
              value: messageContent
            }
          ]
        })
      });

      console.log('MailChannels transmission status:', mailChannelsRes.status);
    } catch (mailErr) {
      // In local dev or non-Cloudflare environment, log output
      console.warn('MailChannels dispatch note (dev fallback):', mailErr);
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Your project brief has been received and routed to our engineering leadership.',
      targetEmail
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({
      error: 'An internal server error occurred while processing your request.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
