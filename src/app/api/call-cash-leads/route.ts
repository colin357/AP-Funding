import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      phoneReceived,
      callOrText,
      phoneDuration,
      location,
      spamTimeframe,
      customerHistory,
      askedToStop,
      messageCount,
      companyPhone,
      dncRegistered,
      consent,
      estimateLow,
      estimateHigh,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !phoneReceived) {
      return NextResponse.json(
        { error: "Name, email, phone, and the number that received the messages are required" },
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
        `🚨 NEW CALL CASH LEAD - Call Cash`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Number that received messages: ${phoneReceived}`,
        `Call or text: ${callOrText}`,
        `Had number for: ${phoneDuration}`,
        `Location: ${location}`,
        `Spam time frame: ${spamTimeframe}`,
        `Customer history: ${customerHistory}`,
        `Asked them to stop: ${askedToStop}`,
        `Est. # of messages: ${messageCount}`,
        `Spammer's number: ${companyPhone}`,
        `On Do Not Call Registry: ${dncRegistered ? "Yes" : "No"}`,
        `Consent to contact: ${consent ? "Yes" : "No"}`,
        `Estimated Advance: $${estimateLow?.toLocaleString()} - $${estimateHigh?.toLocaleString()}`,
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
      console.log("New Call Cash lead received:", {
        name,
        email,
        phone,
        phoneReceived,
        callOrText,
        phoneDuration,
        location,
        spamTimeframe,
        customerHistory,
        askedToStop,
        messageCount,
        companyPhone,
        dncRegistered,
        consent,
      });
    }

    // Send lead data to Zapier webhook
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/17690982/441qdo5/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "call-cash",
          name,
          email,
          phone,
          phoneReceived,
          callOrText,
          phoneDuration,
          location,
          spamTimeframe,
          customerHistory,
          askedToStop,
          messageCount,
          companyPhone,
          dncRegistered,
          consent,
          estimateLow,
          estimateHigh,
        }),
      });
    } catch (zapierError) {
      console.error("Failed to send Call Cash lead to Zapier:", zapierError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing Call Cash lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
