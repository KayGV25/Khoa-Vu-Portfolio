import type { ReactNode } from "react";

export function Educations(): ReactNode {
    return (
        <section id="about" className="w-full sm:h-[calc(100svh-72px)] h-full flex flex-col-reverse justify-end snap-start sm:flex-row sm:justify-between sm:items-start items-end gap-8 pb-6">
            <div className="w-full max-sm:w-full sm:h-full sm:relative">
                <div className="sm:absolute sm:bottom-0 sm:left-0 w-full h-full">
                    <div className="flex flex-col gap-6 justify-center h-full max-sm:px-4">
                        <h1 className="text-6xl">Educations</h1>
                        <div className="flex flex-col">
                            <p>University of Bedfordshire, Luton, UK</p>
                            <p>Master of Science in Digital Marketing</p>
                            <p>Nov 2018 – Nov 2019</p>
                        </div>
                        <div className="flex flex-col">
                            <p>University of Bedfordshire, Luton, UK</p>
                            <p>Bachelor of Art with Honors in International Business</p>
                            <p>Aug 2015 – Jun 2018</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./Bedfordshire_logo.jpg" alt="avatar" className="max-h-full max-sm:w-full"/>
        </section>
    )
}