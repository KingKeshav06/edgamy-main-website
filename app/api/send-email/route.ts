import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Handles POST requests to send an email with the pricing form data.
 *
 * The API endpoint expects the following fields in the request body:
 * - institution: string
 * - name: string
 * - email: string
 * - size: string
 * - message: string (optional)
 *
 * @param {NextRequest} request - The request object.
 * @returns {NextResponse} The response object.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { institution, name, email, size, message } = body;
    console.log()

    // Validate required fields
    if (!institution || !name || !email || !size) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create nodemailer transporter with more secure settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Add debug logging to check credentials
    console.log("Using email credentials:", { 
      user: process.env.EMAIL_USER,
      // Don't log the actual password, just check if it exists
      passExists: !!process.env.EMAIL_PASSWORD 
    });

    // Create HTML content for better formatting
    const htmlContent = `
      <h2>New Pricing Form Submission</h2>
      <p><strong>Institution:</strong> ${institution}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Institution Size:</strong> ${size}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "cy.shubham.mishra@gmail.com",
      subject: "New Pricing Form Submission",
      text: `
        Institution: ${institution}
        Name: ${name}
        Email: ${email}
        Institution Size: ${size}
        Message: ${message || "N/A"}
      `,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

// Handling GET requests properly
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export const dynamic = 'force-dynamic';
