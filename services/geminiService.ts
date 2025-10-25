// services/geminiService.ts
// Lightweight client-side placeholder for development/build-time resolution.
// IMPORTANT: This file is a shim only — do NOT put secret keys or call private APIs
// directly from browser code. Replace these functions with server calls later.

type SendMessageInput = { message: string };
type SendMessageResponse = { text: string; candidates?: any[] };

// Simulated chat initialization
export function initializeChat() {
  const chat = {
    sendMessage: async ({ message }: SendMessageInput): Promise<SendMessageResponse> => {
      await new Promise((r) => setTimeout(r, 600));
      return { text: `Echo: ${message}`, candidates: [] };
    },
  };
  return chat as unknown as any;
}

export async function generateImage(prompt: string): Promise<string> {
  const safe = encodeURIComponent(prompt.slice(0, 40));
  return `https://via.placeholder.com/512.png?text=${safe}`;
}

export async function generateQuiz(topic: string, difficulty: string, numQuestions: number) {
  const questions = Array.from({ length: Math.max(1, numQuestions) }).map((_, i) => ({
    id: i + 1,
    question: `${difficulty} question ${i + 1} about ${topic}`,
    choices: [
      `Choice A for ${topic}`,
      `Choice B for ${topic}`,
      `Choice C for ${topic}`,
      `Choice D for ${topic}`,
    ],
    answerIndex: 0,
  }));
  await new Promise((r) => setTimeout(r, 400));
  return questions;
}
