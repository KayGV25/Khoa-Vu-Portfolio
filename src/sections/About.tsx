import type { ReactNode } from "react";

export function About(): ReactNode {
    return (
        <section id="about" className="w-full sm:h-[calc(100svh-72px)] h-full flex flex-col-reverse justify-end snap-start sm:flex-row sm:justify-between sm:items-start items-end gap-8 pb-6">
            <div className="w-full max-sm:w-full sm:h-full sm:relative">
                <div className="sm:absolute sm:bottom-0 sm:left-0 w-full h-full">
                    <div className="flex flex-col gap-8 justify-end h-full max-sm:px-4">
                        <h1 className="text-6xl">About</h1>
                        <div className="h-fit">
                            <ul className="list-disc">
                                <li>More than 5 years professional experience in Logistics & Supply Chain field</li>
                                <li>Master’s degree major in Digital Marketing</li>
                                <li>Bachelor’s degree in business studies, majoring in International Business</li>
                                <li>A passionate individual who is confident with communication skills and commercial awareness, has background in Master of Digital Marketing and Undergraduate degree in International Business,
experienced in business working environment and is in search for opportunities to build a solid
foundation for successful career in sector related to Logistics & Supply Chain, Sales, Business Consultant, and Administration.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./Logistic_bg.jpg" alt="avatar" className="max-h-full max-sm:w-full"/>
        </section>
    )
}