import { useState, useEffect } from "react";
import type { JSX, KeyboardEvent } from "react";

export function Hamburger({ onClick, isOpen: externalOpen }: { onClick?: (isOpen: boolean) => void; isOpen?: boolean }): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick(): void {
        setIsOpen(prev => {
            const next = !prev;
            if (onClick) onClick(next);
            return next;
        });
    }

    function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>): void {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    }

    // Sync with external open state if provided (e.g., when NavBar collapses the menu)
    useEffect(() => {
        if (typeof externalOpen === 'boolean') {
            // Schedule the state update in the next animation frame to avoid
            // synchronous setState inside the effect (prevents cascading renders).
            window.requestAnimationFrame(() => setIsOpen(externalOpen));
        }
    }, [externalOpen]);

    return (
        <button
            type="button"
            aria-expanded={isOpen}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className="flex flex-col justify-center items-center gap-1 p-2"
        >
            <span
                className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
                className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
                className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
        </button>
    );
}