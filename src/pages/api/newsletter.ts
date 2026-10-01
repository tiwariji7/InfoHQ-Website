export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const contentType = request.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');

  try {
    let email = '';
    let honeypot = '';

    if (isJson) {
      const body = await request.json().catch(() => null);
      email = body?.email || '';
      honeypot = body?.b_honeypot || '';
    } else {
      const formData = await request.formData().catch(() => null);
      email = formData?.get('email')?.toString() || '';
      honeypot = formData?.get('b_honeypot')?.toString() || '';
    }

    // Honeypot check (bot submission silent success)
    if (honeypot) {
      if (isJson) {
        return new Response(JSON.stringify({ success: true, message: "Thanks — you're subscribed." }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return redirect('/?newsletter=success', 303);
    }

    email = String(email).trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      if (isJson) {
        return new Response(JSON.stringify({ error: 'Please enter a valid email.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return redirect('/?newsletter=invalid', 303);
    }

    // Cloudflare KV storage per functional-tech-requirements.md
    const runtime = (locals as any)?.runtime;
    const kv = runtime?.env?.NEWSLETTER_SUBSCRIBERS;

    if (kv && typeof kv.put === 'function') {
      // Idempotent write: duplicate emails safely update/preserve without breaking
      await kv.put(`sub:${email}`, JSON.stringify({
        email,
        subscribedAt: new Date().toISOString(),
        status: 'active'
      }));
    } else {
      console.log('[Dev/Local Newsletter Subscriber]:', email);
    }

    if (isJson) {
      return new Response(JSON.stringify({
        success: true,
        message: "Thanks — you're subscribed."
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return redirect('/?newsletter=success', 303);

  } catch (err: any) {
    console.error('Newsletter API error:', err);
    if (isJson) {
      return new Response(JSON.stringify({
        error: 'Something went wrong. Please try again.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return redirect('/?newsletter=error', 303);
  }
};
