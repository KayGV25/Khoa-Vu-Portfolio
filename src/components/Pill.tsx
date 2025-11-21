import type { ReactNode } from "react";

export function Pill({ content }: { content: string }): ReactNode {
    return (
        <div className="w-full sm:w-fit py-2 px-4 rounded-full border flex flex-row gap-1 align-baseline">
            <p> {content} </p>
            <img src="./tick.svg" alt="tick" className="size-5"/>
        </div>
    )
}