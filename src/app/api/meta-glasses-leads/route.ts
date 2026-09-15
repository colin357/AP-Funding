import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      glassesModel,
      purchaseTimeframe,
      stillOwn,
      arbitrationStatus,
      lawFirm,
      location,
      consent,
      maxAdvance,
    } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;
    const toNumber = process.env.NOTIFICATION_PHONE_NUMBER;

    if (accountSid && authToken && fromNumber && toNumber) {
      const client = twilio(accountSid, authToken);

      const messageBody = [
        `🚨 NEW META GLASSES LEAD - Call Cash`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Glasses model: ${glassesModel}`,
        `Purchased: ${purchaseTimeframe}`,
        `Still owns glasses: ${stillOwn}`,
        `Arbitration status: ${arbitrationStatus}`,
        `Law firm: ${lawFirm}`,
        `Location: ${location}`,
        `Consent to contact: ${consent ? "Yes" : "No"}`,
        `Advance requested: up to $${maxAdvance?.toLocaleString()}`,
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
      console.log("New Meta glasses lead received:", {
        name,
        email,
        phone,
        glassesModel,
        purchaseTimeframe,
        stillOwn,
        arbitrationStatus,
        lawFirm,
        location,
        consent,
      });
    }

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/17690982/u0uhrm5/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "meta-glasses",
          name,
          email,
          phone,
          glassesModel,
          purchaseTimeframe,
          stillOwn,
          arbitrationStatus,
          lawFirm,
          location,
          consent,
          maxAdvance,
        }),
      });
    } catch (zapierError) {
      console.error("Failed to send Meta glasses lead to Zapier:", zapierError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing Meta glasses lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
