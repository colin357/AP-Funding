export interface LeadData {
  name: string;
  email: string;
  phone: string;
  accidentDate: string;
  injuries: string;
  hasLawyer: boolean;
}

export interface EstimateResult {
  low: number;
  high: number;
  factors: string[];
}

const SEVERE_KEYWORDS = [
  "surgery",
  "hospitalization",
  "hospitalized",
  "broken bone",
  "broken",
  "fracture",
  "spinal",
  "spine",
  "tbi",
  "traumatic brain",
  "brain injury",
  "paralysis",
  "amputation",
  "internal bleeding",
  "organ",
  "ICU",
  "coma",
  "multiple surgeries",
];

const MODERATE_KEYWORDS = [
  "whiplash",
  "concussion",
  "torn",
  "ligament",
  "herniated",
  "disc",
  "knee",
  "shoulder",
  "dislocation",
  "stitches",
  "physical therapy",
  "MRI",
  "CT scan",
  "nerve damage",
  "back injury",
  "neck injury",
];

const MINOR_KEYWORDS = [
  "bruise",
  "sprain",
  "soreness",
  "pain",
  "stiff",
  "headache",
  "scratch",
  "minor",
  "sore",
  "swelling",
  "discomfort",
];

function getMonthsSinceAccident(accidentDate: string): number {
  const accident = new Date(accidentDate);
  const now = new Date();
  const diffMs = now.getTime() - accident.getTime();
  return diffMs / (1000 * 60 * 60 * 24 * 30);
}

function classifyInjurySeverity(
  injuries: string
): "severe" | "moderate" | "minor" {
  const lower = injuries.toLowerCase();

  for (const keyword of SEVERE_KEYWORDS) {
    if (lower.includes(keyword)) return "severe";
  }

  for (const keyword of MODERATE_KEYWORDS) {
    if (lower.includes(keyword)) return "moderate";
  }

  for (const keyword of MINOR_KEYWORDS) {
    if (lower.includes(keyword)) return "minor";
  }

  // Default to moderate if we can't classify
  return "moderate";
}

export function calculateEstimate(data: LeadData): EstimateResult {
  let baseLow = 0;
  let baseHigh = 0;
  const factors: string[] = [];

  // Factor 1: Attorney representation
  if (data.hasLawyer) {
    baseLow += 3000;
    baseHigh += 5000;
    factors.push("Attorney representation increases case value");
  } else {
    baseLow += 500;
    baseHigh += 1500;
    factors.push(
      "Retaining an attorney could increase your advance amount"
    );
  }

  // Factor 2: Time since accident
  const months = getMonthsSinceAccident(data.accidentDate);
  if (months <= 1) {
    baseLow += 2000;
    baseHigh += 4000;
    factors.push("Recent accident with fresh documentation");
  } else if (months <= 3) {
    baseLow += 1500;
    baseHigh += 3000;
    factors.push("Accident within standard filing window");
  } else if (months <= 6) {
    baseLow += 1000;
    baseHigh += 2500;
  } else if (months <= 12) {
    baseLow += 500;
    baseHigh += 1500;
  } else {
    baseLow += 500;
    baseHigh += 1000;
  }

  // Factor 3: Injury severity
  const severity = classifyInjurySeverity(data.injuries);
  switch (severity) {
    case "severe":
      baseLow += 5000;
      baseHigh += 16000;
      factors.push("Significant injuries may qualify for higher advance");
      break;
    case "moderate":
      baseLow += 2000;
      baseHigh += 7000;
      factors.push("Moderate injuries with potential for recovery costs");
      break;
    case "minor":
      baseLow += 500;
      baseHigh += 2500;
      factors.push("Injuries documented with potential medical expenses");
      break;
  }

  // Clamp to $500 - $25,000 range
  const low = Math.max(500, Math.min(25000, baseLow));
  const high = Math.max(500, Math.min(25000, baseHigh));

  return {
    low: Math.round(low / 100) * 100,
    high: Math.round(high / 100) * 100,
    factors,
  };
}
