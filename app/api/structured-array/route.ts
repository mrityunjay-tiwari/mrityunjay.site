import { streamObject } from "ai";
import { pokemonSchema } from "./schema";
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()

        const result = await streamObject({
            model: google('gemini-2.5-flash'),
            schema: pokemonSchema,
            output: "array",
            prompt: prompt
        })

        return result.toTextStreamResponse()
    } catch (err) {
        console.error("failed to generate list", err)
        return new Response("failed to generate list", {status: 500})
    }
}