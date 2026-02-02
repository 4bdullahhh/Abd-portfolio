// Service removed. 
// Previously contained logic for Google Gemini API which utilized process.env.
// Cleared to ensure Vercel deployment succeeds without Node.js global variable errors.

export const sendMessageToGemini = async () => {
  console.warn("Gemini service is disabled.");
  return "Service disabled";
};