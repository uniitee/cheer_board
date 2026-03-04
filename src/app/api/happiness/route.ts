import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN!);

// emotion → happiness weight mapping
const emotionWeights: Record<string, number> = {
  joy: 1,
  love: 1,
  gratitude: 0.9,
  admiration: 0.8,
  approval: 0.7,
  excitement: 0.9,

  neutral: 0.5,

  sadness: 0,
  anger: 0,
  fear: 0.2,
  disappointment: 0.1,
  frustration: 0.2,
  annoyance: 0.3,
};

function calculateHappiness(predictions: any[]) {
  let score = 0;

  predictions.forEach((pred) => {
    const weight = emotionWeights[pred.label] ?? 0.5;
    score += pred.score * weight;
  });

  return Math.round(score * 100); // percentage
}

export async function POST(req: Request) {
  const { text } = await req.json();

  try {
    const result = await client.textClassification({
      model: "joeddav/distilbert-base-uncased-go-emotions-student",
      inputs: text,
      provider: "hf-inference",
    });

    const happinessScore = calculateHappiness(result);

    return NextResponse.json({
      emotions: result,
      happiness: happinessScore,
    });
  } catch (error) {
    return NextResponse.json({ error: "Model failed" }, { status: 500 });
  }
}
