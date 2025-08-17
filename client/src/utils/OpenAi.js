import { GoogleGenAI } from "@google/genai";
export const ai = new GoogleGenAI({ apiKey: "AIzaSyBoCV0E9WkSyXGI6arKKYC4iVW3PjYQ_TE" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}




// AIzaSyBoCV0E9WkSyXGI6arKKYC4iVW3PjYQ_TE