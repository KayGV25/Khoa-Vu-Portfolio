import type { ReactNode } from "react";

export function Volunteers(): ReactNode {
    return (
        <section id="about" className="w-full sm:h-[calc(100svh-72px)] h-fit flex flex-col justify-end snap-start sm:max-w-5xl mx-auto sm:flex-row sm:justify-between sm:items-start items-end pb-6">
            <div className="w-full max-sm:w-full sm:h-full sm:relative">
                <div className="sm:absolute sm:bottom-0 sm:left-0 w-full h-full">
                    <div className="flex flex-col gap-8 justify-end h-full max-sm:px-4">
                        <h1 className="text-6xl">Volunteers</h1>
                        <div className="h-fit">
                            <p>Boost Turku</p>
                            <p>Marketing Techinial Volunteer (Podcast Project)</p>
                            <p>Nov 2025 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}