import { MRITYUNJAY_AI_SYSTEM_PROMPT } from '@/utils/system-prompt'
import { openrouter } from '@openrouter/ai-sdk-provider'
import {UIMessage, streamText, convertToModelMessages} from 'ai'

export async function POST(req: Request) {
    try{
            const {messages}:{messages: UIMessage[]} = await req.json()

    const result = await streamText({
        model: openrouter("openai/gpt-4o-mini"),
        messages: convertToModelMessages(messages),
        system: MRITYUNJAY_AI_SYSTEM_PROMPT
    })

    return result.toUIMessageStreamResponse()
    } catch(err) {
        console.error("fialed to generate message")
        return new Response("Failed to generate message", {status: 500})
    }
}