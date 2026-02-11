import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// In-memory cache (persists while serverless instance is warm)
const imageCache = new Map();

// Fallback image if AI fails
const FALLBACK_IMAGE =
  "https://source.unsplash.com/1024x1024/?technology,dark,cyberpunk";

export default async function handler(req, res) {
  try {
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({ image: FALLBACK_IMAGE });
    }

    // If cached, return immediately
    if (imageCache.has(title)) {
      return res.status(200).json({
        image: imageCache.get(title),
        cached: true,
      });
    }

    const prompt = `
    Futuristic dark red cyberpunk illustration representing a software project titled "${title}".
    Premium developer portfolio aesthetic, glowing UI, AI theme, cinematic lighting,
    ultra detailed, high contrast, dark background.
    `;

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024",
    });

    const imageUrl = result.data?.[0]?.url;

    if (!imageUrl) {
      return res.status(200).json({ image: FALLBACK_IMAGE });
    }

    // Store in cache
    imageCache.set(title, imageUrl);

    return res.status(200).json({
      image: imageUrl,
      cached: false,
    });
  } catch (error) {
    console.error("Image generation error:", error.message);

    return res.status(200).json({
      image: FALLBACK_IMAGE,
      error: true,
    });
  }
}
