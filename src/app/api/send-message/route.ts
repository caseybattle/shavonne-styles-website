import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    // Send email to Shavonne
    const emailData = {
      from: 'Shavonne Styles Website <noreply@shavonnestyles.com>',
      to: ['Shavonnecstyles@gmail.com'],
      subject: `New Message from ${name} via Website Chatbot`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ec4899; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            New Message from Website Chatbot
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background-color: #fef7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #ec4899;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              This message was sent from the Shavonne Styles website chatbot on ${new Date().toLocaleString()}.
            </p>
          </div>
        </div>
      `,
    };

    const emailResult = await resend.emails.send(emailData);

    // Send SMS notification to Shavonne
    let smsResult = null;
    try {
      if (process.env.TWILIO_PHONE_NUMBER && process.env.SHAVONNE_PHONE_NUMBER) {
        const smsMessage = `New website message from ${name}${email ? ` (${email})` : ''}${phone ? ` - ${phone}` : ''}\n\nMessage: ${message}\n\nSent via website chatbot at ${new Date().toLocaleString()}`;
        
        smsResult = await twilioClient.messages.create({
          body: smsMessage,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: process.env.SHAVONNE_PHONE_NUMBER,
        });
      }
    } catch (smsError) {
      console.error('SMS sending failed:', smsError);
      // Continue even if SMS fails - email is the primary method
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        emailId: emailResult.id,
        smsId: smsResult?.sid || null,
        notifications: {
          email: 'sent',
          sms: smsResult ? 'sent' : 'failed'
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}