import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function analyzeEmotion(text: string) {
  const output = await client.textClassification({
    model: "joeddav/distilbert-base-uncased-go-emotions-student",
    inputs: text,
    provider: "hf-inference",
  });

  return output;
}
