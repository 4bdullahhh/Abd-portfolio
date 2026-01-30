import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Abdullah. 
Abdullah is a Commerce student who is also passionate about Technology.
His skills include:
- Digital Marketing
- Web Development (React, Tailwind)
- Automation (n8n)
- AI Voice Agents & Chatbots

Your tone should be professional, enthusiastic, and slightly futuristic.
Answer questions about Abdullah's background, skills, and projects.
If asked about contact info, refer them to the contact form or email 'abdullah@example.com'.
Keep responses concise (under 100 words).
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Convert history to format expected by the new SDK if needed, 
    // strictly speaking for single turn or simple chat we can just use chats.create
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history // The SDK accepts history in specific format, ensuring compatibility
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I didn't catch that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my neural network right now.";
  }
};