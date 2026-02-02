import { google } from '@ai-sdk/google';
import { generateText } from "ai"

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()
    const {text} = await generateText({
        model:  google('gemini-2.5-flash'),
        prompt: prompt,
        system: "You are a assisant whose task is to format a given sentence, that sentence is what has been said by the user and is to be given to a AI model to generate a response. So just format the sentence and return it. Don't add any extra information."
    })

    return Response.json({text})
    } catch (error) {
        console.log("Can't Transcribe",error)
    }
}