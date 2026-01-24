import { streamObject } from "ai";
import { openrouter } from "@openrouter/ai-sdk-provider";
import { pokemonSchema } from "./schema";

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()

        const result = await streamObject({
            model: openrouter("openai/gpt-4o-mini"),
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