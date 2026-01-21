import { streamText } from "ai";
import { openrouter } from "@openrouter/ai-sdk-provider";

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()
    const result = await streamText({
        model: openrouter("openai/gpt-4o-mini"),
        prompt: prompt
    })
    
    return result.toUIMessageStreamResponse()
    } catch (error) {
        console.log(error)
    }
}