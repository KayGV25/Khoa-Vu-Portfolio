import type { ReactNode } from "react";
import { About } from "../sections/About";
import { Home } from "../sections/Home";
import { Experience } from "../sections/Experience";
import { Educations } from "../sections/Educations";
import { Volunteers } from "../sections/Volunteers";
import { Expertise } from "../sections/Expertise";
import { Connect } from "../sections/Connect";

export function PortfolioV1(): ReactNode {
    return(
        <div className="flex flex-col justify-center snap-mandatory snap-y scroll-pt-14 w-full *:max-sm:px-4">
            <div className="h-14" id="home"></div>
            <div className="snap-start bg-[url(./bg_tile.png)] bg-center bg-repeat w-svw max-sm:pt-4 h-[calc(100svh-72px)]">
                <Home/>
            </div>
            <div className="h-14" id="about"></div>
            <div className="w-full max-w-5xl px-4 mx-auto">
                <About/>
            </div>
            <div id="experiences" className="h-14"></div>
            <div className="snap-start bg-[url(./bg_tile.png)] bg-top-left bg-repeat w-svw max-sm:pt-4 min-h-svh flex">
                <Experience/>
            </div>
            <div id="educations" className="h-14"></div>
            <div className="w-full max-w-5xl px-4 mx-auto">
                <Educations/>
            </div>
            <div id="volunteers" className="h-14"></div>
            <div className="snap-start bg-[url(./bg_tile.png)] bg-top-left bg-repeat w-svw max-sm:pt-4 h-fit flex">
                <Volunteers/>
            </div>
            <div id="expertise" className="h-14"></div>
            <div className="w-full max-w-5xl px-4 mx-auto">
                <Expertise/>
            </div>
            <div id="connect" className="h-14"></div>
            <div className="snap-start bg-[url(./bg_tile.png)] bg-top-left bg-repeat w-svw max-sm:pt-4 h-fit flex">
                <Connect/>
            </div>
        </div>
    )
}