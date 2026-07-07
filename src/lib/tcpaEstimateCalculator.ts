export interface TcpaLeadData {
  name: string;
  email: string;
  phone: string;
  phoneReceived: string;
  callOrText: string;
  phoneDuration: string;
  location: string;
  spamTimeframe: string;
  customerHistory: string;
  askedToStop: string;
  messageCount: string;
  companyPhone: string;
  dncRegistered: boolean;
  consent: boolean;
}

export interface TcpaEstimateResult {
  low: number;
  high: number;
  factors: string[];
}

// Per the TCPA, each unsolicited text/call can carry statutory damages of
// $500 (negligent) up to $1,500 (willful or knowing) per violation.
const PER_MESSAGE_LOW = 500;
const PER_MESSAGE_HIGH = 1500;

const MAX_ESTIMATE = 500000;

function parseMessageCount(raw: string): number {
  if (!raw) return 0;
  // Pull the first number out of free-form text (handles "about 20", "20-30", "a dozen-ish").
  const match = raw.replace(/,/g, "").match(/\d+/);
  if (match) {
    return parseInt(match[0], 10);
  }
  // Rough fallback for common written estimates.
  const lower = raw.toLowerCase();
  if (lower.includes("dozen")) return 12;
  if (lower.includes("hundred")) return 100;
  if (lower.includes("several") || lower.includes("many")) return 10;
  if (lower.includes("few") || lower.includes("couple")) return 3;
  return 5;
}

function indicatesYes(raw: string): boolean {
  if (!raw) return false;
  const lower = raw.toLowerCase();
  return (
    lower.startsWith("y") ||
    lower.includes("yes") ||
    lower.includes("told them") ||
    lower.includes("asked them") ||
    lower.includes("replied stop") ||
    lower.includes("said stop")
  );
}

export function calculateTcpaEstimate(
  data: TcpaLeadData
): TcpaEstimateResult {
  const factors: string[] = [];

  const messages = Math.max(1, parseMessageCount(data.messageCount));

  let low = messages * PER_MESSAGE_LOW;
  let high = messages * PER_MESSAGE_HIGH;

  factors.push(
    `Approximately ${messages} message${messages === 1 ? "" : "s"} at a potential $500–$1,500 each under the TCPA (not guaranteed)`
  );

  // Asking the company to stop and being texted anyway points to willful
  // violations, which carry the higher per-message damages.
  if (indicatesYes(data.askedToStop)) {
    high = messages * PER_MESSAGE_HIGH;
    low = Math.round(messages * 750);
    factors.push(
      "You asked them to stop — continued contact may count as willful violations"
    );
  }

  // Registration on the National Do Not Call Registry strengthens the claim.
  if (data.dncRegistered) {
    factors.push(
      "Your number is on the National Do Not Call Registry — this strengthens your case"
    );
  }

  const lowClamped = Math.max(PER_MESSAGE_LOW, Math.min(MAX_ESTIMATE, low));
  const highClamped = Math.max(PER_MESSAGE_LOW, Math.min(MAX_ESTIMATE, high));

  return {
    low: Math.round(lowClamped / 100) * 100,
    high: Math.round(highClamped / 100) * 100,
    factors,
  };
}
