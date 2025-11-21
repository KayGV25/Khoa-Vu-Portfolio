import type { ReactNode } from "react";

export function Home(): ReactNode {
    return (
        <section className="w-full sm:h-[calc(100svh-72px)] h-full items-end flex pb-8 max-w-5xl mx-auto">
            <div className="w-full flex flex-col gap-8">
                <img src="./Avatar.jpg" alt="avatar" className="w-64 rounded-full max-sm:mx-auto"/>
                <h1 className="text-6xl">Khoa (Brad) Vu</h1>
                <p>Logistics and Supply Chain Specialist</p>
                <p>Turku, Finland</p>
            </div>
        </section>
    )
}