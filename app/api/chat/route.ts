import { MRITYUNJAY_AI_SYSTEM_PROMPT } from '@/utils/system-prompt'
import {UIMessage, streamText, convertToModelMessages} from 'ai'
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
    try{
            const {messages}:{messages: UIMessage[]} = await req.json()

    const result = await streamText({
        model: google('gemini-2.5-flash'),
        messages: await convertToModelMessages(messages),
        system: MRITYUNJAY_AI_SYSTEM_PROMPT
    })

    return result.toUIMessageStreamResponse()
    } catch(err) {
        console.error("fialed to generate message")
        return new Response("Failed to generate message", {status: 500})
    }
}