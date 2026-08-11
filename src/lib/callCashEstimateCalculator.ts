export interface CallCashLeadData {
  name: string;
  email: string;
  phone: string;
  phoneReceived: string;
  callOrText: string;
  phoneDuration: string;
  location: string;
  customerHistory: string;
  messageCount: string;
  companyPhone: string;
  consent: boolean;
}

export interface CallCashEstimateResult {
  low: number;
  high: number;
  factors: string[];
}

// Call Cash provides a pre-settlement cash advance on a TCPA case of up to
// $1,000 per violation, subject to underwriting. Each unwanted text or call
// can count as a separate violation.
const PER_VIOLATION_HIGH = 1000;
const PER_VIOLATION_LOW = 250;

const MAX_ADVANCE = 25000;

function parseMessageCount(raw: string): number {
  if (!raw) return 0;
  // Pull the first number out of free-form text (handles "about 20", "20-30").
  const match = raw.replace(/,/g, "").match(/\d+/);
  if (match) {
    return parseInt(match[0], 10);
  }
  const lower = raw.toLowerCase();
  if (lower.includes("dozen")) return 12;
  if (lower.includes("hundred")) return 100;
  if (lower.includes("several") || lower.includes("many")) return 10;
  if (lower.includes("few") || lower.includes("couple")) return 3;
  return 5;
}

export function calculateCallCashEstimate(
  data: CallCashLeadData
): CallCashEstimateResult {
  const factors: string[] = [];

  const violations = Math.max(1, parseMessageCount(data.messageCount));

  const low = violations * PER_VIOLATION_LOW;
  const high = violations * PER_VIOLATION_HIGH;

  factors.push(
    `Approximately ${violations} violation${violations === 1 ? "" : "s"} at up to $1,000 each, subject to underwriting`
  );

  factors.push("Funding decisions are made within 48 hours of underwriting");

  const lowClamped = Math.max(PER_VIOLATION_LOW, Math.min(MAX_ADVANCE, low));
  const highClamped = Math.max(PER_VIOLATION_LOW, Math.min(MAX_ADVANCE, high));

  return {
    low: Math.round(lowClamped / 100) * 100,
    high: Math.round(highClamped / 100) * 100,
    factors,
  };
}
