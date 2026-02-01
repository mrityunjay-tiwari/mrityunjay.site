import { streamText } from "ai";
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()
    const result = await streamText({
        model: google('gemini-2.5-flash'),
        prompt: prompt
    })
    
    return result.toUIMessageStreamResponse()
    } catch (error) {
        console.log(error)
    }
}