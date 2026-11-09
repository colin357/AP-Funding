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
// $1,000 total, subject to underwriting. More violations (unwanted texts or
// calls) strengthen the case and push the estimate toward the cap.
const MAX_ADVANCE = 1000;
const MIN_ADVANCE = 250;
const PER_VIOLATION_LOW = 100;
const LOW_CAP = 750;

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

  const low = Math.max(
    MIN_ADVANCE,
    Math.min(LOW_CAP, violations * PER_VIOLATION_LOW)
  );
  const high = MAX_ADVANCE;

  factors.push(
    `Approximately ${violations} violation${violations === 1 ? "" : "s"} reported — advances are up to $1,000 total, subject to underwriting`
  );

  factors.push("Funding decisions are made within 48 hours of underwriting");

  return {
    low: Math.round(low / 50) * 50,
    high,
    factors,
  };
}
