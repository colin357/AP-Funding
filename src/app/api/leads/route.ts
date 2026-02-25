import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, accidentDate, injuries, hasLawyer, estimateLow, estimateHigh } = body;

    // Validate required fields
    if (!name || !email || !phone || !accidentDate || !injuries || hasLawyer === undefined) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send Twilio SMS notification
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;
    const toNumber = process.env.NOTIFICATION_PHONE_NUMBER;

    if (accountSid && authToken && fromNumber && toNumber) {
      const client = twilio(accountSid, authToken);

      const messageBody = [
        `🚨 NEW LEAD - Olivia Advances`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Accident Date: ${accidentDate}`,
        `Injuries: ${injuries}`,
        `Has Attorney: ${hasLawyer ? "Yes" : "No"}`,
        `Estimate Range: $${estimateLow?.toLocaleString()} - $${estimateHigh?.toLocaleString()}`,
        ``,
        `Follow up ASAP!`,
      ].join("\n");

      await client.messages.create({
        body: messageBody,
        from: fromNumber,
        to: toNumber,
      });
    } else {
      console.warn(
        "Twilio credentials not configured. SMS notification skipped."
      );
      console.log("New lead received:", { name, email, phone, accidentDate, injuries, hasLawyer });
    }

    // Send lead data to Zapier webhook
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/17690982/u0uhrm5/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          accidentDate,
          injuries,
          hasLawyer,
          estimateLow,
          estimateHigh,
        }),
      });
    } catch (zapierError) {
      console.error("Failed to send lead to Zapier:", zapierError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
