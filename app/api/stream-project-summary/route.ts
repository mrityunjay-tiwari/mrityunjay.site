import { streamText } from "ai";
import { openrouter } from "@openrouter/ai-sdk-provider";
import { PROJECT_SYMMARY_SYSTEM_PROMPT } from "@/utils/system-prompt";

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()
    const result = await streamText({
        model: openrouter("openai/gpt-4o-mini"),
        system: `You are a smart agent who summarises the information about the project asked in a short and crisp manner.
                    Instructions : 
                    - Be precise
                    - Do not provide links in answer
                    - Do not use emoji
                    - Keep a friendly yet professional tone
                    This is the information about all the projects, see about which project it is being asked and reply about the specific project only : 
                ${PROJECT_SYMMARY_SYSTEM_PROMPT}`,
        prompt: prompt
    })
    
    return result.toUIMessageStreamResponse()
    } catch (error) {
        console.log(error)
    }
}