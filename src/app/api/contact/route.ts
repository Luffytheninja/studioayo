import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, budget, message } = body;

    // Basic server-side validation
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const recipient = process.env.CONTACT_RECIPIENT || 'contactstudioayo@gmail.com';
    const timestamp = new Date().toLocaleString('en-GB', {
      timeZone: 'Africa/Lagos',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const mailOptions = {
      from: `"Studio AYO Website" <${process.env.GMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New Project Enquiry — ${name}${company ? ` (${company})` : ''} · ${service}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #F4F1EA; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border: 1px solid #1C120C; }
    .header { background: #1C120C; padding: 32px 40px; }
    .header h1 { color: #F4F1EA; margin: 0; font-size: 22px; font-weight: 400; letter-spacing: 0.04em; }
    .header p { color: #F4F1EA; opacity: 0.5; margin: 6px 0 0; font-size: 12px; font-family: monospace; }
    .body { padding: 40px; }
    .badge { display: inline-block; background: #FF4D4D; color: #fff; font-size: 11px; font-family: monospace; padding: 4px 10px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 28px; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 14px 0; border-bottom: 1px solid #1C120C15; vertical-align: top; }
    td:first-child { font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; color: #1C120C80; width: 38%; padding-right: 16px; }
    td:last-child { font-size: 14px; color: #1C120C; font-weight: 500; }
    .message-section { margin-top: 32px; }
    .message-section h3 { font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; color: #1C120C80; margin-bottom: 12px; }
    .message-body { background: #F9F9FB; border-left: 3px solid #FF4D4D; padding: 20px; font-size: 14px; color: #1C120C; line-height: 1.7; white-space: pre-wrap; }
    .footer { padding: 24px 40px; border-top: 1px solid #1C120C15; font-size: 11px; font-family: monospace; color: #1C120C60; text-transform: uppercase; letter-spacing: 0.08em; display: flex; justify-content: space-between; }
    .reply-btn { display: inline-block; margin-top: 28px; padding: 14px 28px; background: #1C120C; color: #F4F1EA; text-decoration: none; font-size: 13px; font-weight: 500; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Studio AYO — New Project Enquiry</h1>
      <p>Received ${timestamp} · WAT</p>
    </div>
    <div class="body">
      <div class="badge">New Enquiry</div>
      <table>
        <tr>
          <td>Name</td>
          <td>${name}</td>
        </tr>
        ${company ? `<tr><td>Company / Brand</td><td>${company}</td></tr>` : ''}
        <tr>
          <td>Email</td>
          <td><a href="mailto:${email}" style="color:#FF4D4D;">${email}</a></td>
        </tr>
        ${phone ? `<tr><td>Phone</td><td>${phone}</td></tr>` : ''}
        <tr>
          <td>Service</td>
          <td>${service}</td>
        </tr>
        <tr>
          <td>Estimated Budget</td>
          <td>${budget}</td>
        </tr>
      </table>

      <div class="message-section">
        <h3>Project Details</h3>
        <div class="message-body">${message}</div>
      </div>

      <a href="mailto:${email}?subject=Re: Your enquiry to Studio AYO" class="reply-btn">
        Reply to ${name} →
      </a>
    </div>
    <div class="footer">
      <span>Studio AYO</span>
      <span>contactstudioayo@gmail.com</span>
    </div>
  </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route] Error sending email:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
