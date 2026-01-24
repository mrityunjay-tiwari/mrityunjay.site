"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {experimental_useObject as useObject} from "@ai-sdk/react";
import {pokemonUISchema} from "../api/structured-array/schema";
import React, {useState} from "react";
import {error} from "console";

export default function Pokemon() {
  const [type, setType] = useState("");
  const {object, submit, error, isLoading, stop} = useObject({
    api: "/api/structured-array",
    schema: pokemonUISchema,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({type});
    setType("");
  };
  return (
    <div className="flex flex-col w-full max-w-3xl pt-12 pb-24 mx-auto">
      {error && <div className="text-red-500 mb-4 px-4"> {error.message}</div>}
      <div className="space-y-8">
        {object?.map((pokemon, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">{pokemon?.name} </h2>
            <div className="grid grid-cols-2 gap-4">
              {pokemon?.abilities?.map((ability, index) => (
                <div key={index} className="bg-zinc-100 p-3 rounded-md">
                  {ability}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4"
      >
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter a dish name..."
            className="flex-1 dark:bg-zinc-900 p-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          {isLoading ? (
            <Button variant={"destructive"} onClick={stop}>
              Stop
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Generate
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
