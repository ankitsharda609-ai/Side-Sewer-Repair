import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert AI assistant for "Bellevue Side Sewer Pros", a specialized plumbing and utility contractor in Bellevue, WA. 
Your goal is to answer potential customers' questions about side sewer repair, public connections, ADU requirements, and Bellevue-specific utility codes.

Key facts to use:
- We serve Bellevue, WA, and surrounding Eastside areas.
- We follow City of Bellevue Utilities Engineering Standards.
- We use PVC SDR 35 pipe and Romac-style couplings.
- We handle Side Sewer (UA) permits and Right-of-Way (ROW) permits.
- We specialize in secondary public connections for ADUs.
- Homeowners are responsible for the entire lateral pipe to the main.
- Emergency contact: (844) 340-6413.

Always be professional, reassuring, and technical where appropriate. If a user asks for a quote, suggest they call the emergency line for a free inspection.
`;

export async function getSewerExpertResponse(userMessage: string, history: { role: 'user' | 'model', text: string }[]) {
  // Always use process.env.API_KEY directly when initializing the client instance.
  // We create the instance here to ensure it uses the most up-to-date configuration.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Map conversation history to the format expected by the Gemini API.
    const formattedHistory = history.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    // The Gemini API requires conversation history to begin with a 'user' turn.
    // We remove the initial hardcoded 'model' greeting if it's the first item in history.
    if (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
      formattedHistory.shift();
    }

    // Use ai.models.generateContent directly for text-based Q&A tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...formattedHistory,
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Access the .text property directly (not as a method).
    return response.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please call us directly at (844) 340-6413 for immediate assistance.";
  }
}