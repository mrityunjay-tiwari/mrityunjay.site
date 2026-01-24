import { openrouter } from '@openrouter/ai-sdk-provider'
import {UIMessage, streamText, convertToModelMessages} from 'ai'

export async function POST(req: Request) {
    try{
            const {messages}:{messages: UIMessage[]} = await req.json()

    const result = await streamText({
        model: openrouter("openai/gpt-4o-mini"),
        messages: convertToModelMessages(messages),
        system: ` Instructions : 
           1."Keep the answers formatted, bold or italic whereever required,
           2."when you give any link give the full working url as link e.g. https://google.com, https://github.com." ` 
    })

    return result.toUIMessageStreamResponse()
    } catch(err) {
        console.error("fialed to generate message")
        return new Response("Failed to generate message", {status: 500})
    }
}