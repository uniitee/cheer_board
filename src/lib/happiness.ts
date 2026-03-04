// lib/happiness.ts
export function calculateHappinessScore(
  emotions: { label: string; score: number }[],
) {
  const positive = new Set([
    "joy",
    "gratitude",
    "love",
    "optimism",
    "admiration",
    "approval",
    "caring",
    "pride",
    "amusement",
    "excitement",
    "relief",
  ]);

  const neutral = new Set(["neutral", "realization", "curiosity", "confusion"]);

  let positiveScore = 0;
  let negativeScore = 0;
  let neutralScore = 0;

  emotions.forEach((emotion) => {
    if (positive.has(emotion.label)) {
      positiveScore += emotion.score;
    } else if (neutral.has(emotion.label)) {
      neutralScore += emotion.score;
    } else {
      negativeScore += emotion.score;
    }
  });

  // weighted happiness logic
  const rawScore = positiveScore * 1 + neutralScore * 0.4 - negativeScore * 1;

  // rawScore will be between -1 and +1
  const normalized = ((rawScore + 1) / 2) * 100;

  return Math.round(normalized);
}
