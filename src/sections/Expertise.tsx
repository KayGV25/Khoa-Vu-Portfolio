import type { ReactNode } from "react";
import { Pill } from "../components/Pill";

export function Expertise(): ReactNode {
    // sample expertise items — replace with real data as needed
    const expertises: string[] = [
        'Logistic & Supply Chain',
        'WMS & TMS',
        'Buisiness Development',
        'Project Management',
        'Leadership and Strategy',
        'Warehouse Management',
        'Photograph',
        'Marketing Strategy',
        'MS Office',
        'Adobe Photoshop & Lightroom'
    ];

    return (
        <section id="about" className="w-full sm:h-[calc(100svh-72px)] h-full flex flex-col-reverse justify-end snap-start sm:flex-row sm:justify-between sm:items-start items-end gap-8 pb-6">
            <div className="w-full my-auto">
                <img src="./Schenker_photo.jpg" alt="avatar" className="max-h-full w-full"/>
            </div>
            <div className="w-full max-sm:w-full sm:h-full sm:relative">
                <div className="sm:absolute sm:bottom-0 sm:left-0 w-full h-full">
                    <div className="flex flex-col gap-6 justify-center h-full max-sm:px-4">
                        <h1 className="text-6xl">Expertise</h1>
                        <ExpertiseList contents={expertises}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ExpertiseList({ contents }: { contents: string[] }): ReactNode {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap w-full gap-2">
            {contents.map((content) => (
                <Pill key={content} content={content} />
            ))}
        </div>
    )
}