import type { ReactNode } from "react";

export function Connect(): ReactNode {
    return (
        <section id="about" className="w-full sm:h-[calc(100svh-72px)] h-fit flex flex-col justify-end snap-start sm:max-w-5xl mx-auto sm:flex-row sm:justify-between sm:items-start items-end pb-6">
            <div className="w-full max-sm:w-full sm:h-full sm:relative">
                <div className="sm:absolute sm:bottom-0 sm:left-0 w-full h-full">
                    <div className="flex flex-col gap-8 justify-end h-full max-sm:px-4">
                        <h1 className="text-6xl">Let's Connect</h1>
                        <div className="h-fit flex flex-col">
                            <p>dangkhoa97@gmail.com</p>
                            <p>+358 46 5665455</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <ConnectIcon href="https://wa.me/358465665455" icon="./whatsapp.svg" alt="whatsapp"/>
                            <ConnectIcon href="https://www.linkedin.com/in/khoa-vu-394b33130/" icon="./linkedin.svg" alt="linkedin"/>
                            <ConnectIcon href="mailto:dangkhoa97@gmail.com" icon="./mail.svg" alt="mail"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ConnectIcon({ href, icon, alt }: { href: string, icon: string, alt: string }): ReactNode {
    return (
        <a href={href} className="size-10 border rounded-full grid place-items-center" target="_blank">
            <img src={icon} alt={alt} className="size-5"/>
        </a>
    )
}