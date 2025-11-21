import { useState, type ReactNode } from "react";
import { EnvImp } from "../env";
import { Hamburger } from "./Hamburger";

function NavBarV1(): ReactNode {
    const [shouldOpenSecNav, setShouldOpenSecNav] = useState(false)

    function onHambergerClick(next?: boolean): void {
        if (typeof next === 'boolean') {
            setShouldOpenSecNav(next)
        } else {
            setShouldOpenSecNav(s => !s)
        }
    }

    const closeMenu = (): void => {
        setShouldOpenSecNav(false)
    };

    return (
        <nav className={`w-svw ${shouldOpenSecNav ? "h-fit" : "h-14"} py-3 fixed top-0 left-0 overflow-clip flex flex-col opacity-90 backdrop-blur-sm z-10`}>
            <div className="flex flex-row w-full max-w-5xl justify-between mx-auto px-4">
                <a href="#home">
                    <div className="cursor-pointer" onClick={closeMenu}>
                        <p className="font-bold font-sans text-2xl">Khoa (Brad) Vu</p>
                    </div>
                </a>
                <div className="hidden sm:block">
                    <div className="flex flex-row gap-3 h-full py-0.5">
                        <NavBlock href="#about">
                            <p>About</p>
                        </NavBlock>
                        <NavBlock href="#experiences">
                            <p>Experiences</p>
                        </NavBlock>
                        <NavBlock href="#educations">
                            <p>Education</p>
                        </NavBlock>
                        <NavBlock href="#volunteers">
                            <p>Volunteers</p>
                        </NavBlock>
                        <NavBlock href="#expertise">
                            <p>Expertise</p>
                        </NavBlock>
                        <NavBlock href="#connect">
                            <p>Connect</p>
                        </NavBlock>
                    </div>
                </div>
                <div className="block sm:hidden">
                    <Hamburger onClick={onHambergerClick} isOpen={shouldOpenSecNav} />
                </div>
            </div>
            <div className={`h-fit py-3 flex justify-center w-full 
                transition-transform duration-200 sm:hidden 
                origin-top overflow-hidden ${shouldOpenSecNav ? 'scale-y-100' : 'scale-y-0'}`}>
                <div className="flex flex-col gap-1 w-full *:w-full pl-4">
                    <NavBlock href="#about" onClick={closeMenu}>
                        <p>About</p>
                    </NavBlock>
                    <NavBlock href="#experiences" onClick={closeMenu}>
                        <p>Experiences</p>
                    </NavBlock>
                    <NavBlock href="#education" onClick={closeMenu}>
                        <p>Education</p>
                    </NavBlock>
                    <NavBlock href="#volunteers" onClick={closeMenu}>
                        <p>Volunteers</p>
                    </NavBlock>
                    <NavBlock href="#expertise" onClick={closeMenu}>
                        <p>Expertise</p>
                    </NavBlock>
                    <NavBlock href="#connect" onClick={closeMenu}>
                        <p>Connect</p>
                    </NavBlock>
                </div>
            </div>
        </nav>
    )
}

function NavBarV2(): ReactNode {
    return (
        <nav></nav>
    )
}

export function NavBar(): ReactNode {
    switch (EnvImp.version) {
        case 1:
            return <NavBarV1/>
        case 2:
            return <NavBarV2/>
    }
}

function NavBlock({children, href = "#", onClick}: {children: ReactNode, href?: string, onClick?: () => void}): ReactNode {
    return (
        <a
            href={href}
            onClick={onClick}
            className={
                `h-full relative inline-block 
                before:content-[''] before:block before:absolute before:bottom-0 before:left-0 
                before:h-0.5 before:w-full before:bg-zinc-900 
                before:transform before:origin-center before:scale-x-0 
                before:transition-transform before:duration-200 
                hover:before:scale-x-100`
            }
        >
            {children}
        </a>
    )
}