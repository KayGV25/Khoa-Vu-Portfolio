import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export function ExpandableTextBox({ children }: { children: ReactNode }): ReactNode {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Height (in pixels) of the collapsed view. Adjust to suit design.
    const COLLAPSED_HEIGHT = 64; // ~4rem

    const checkOverflow = (): void => {
        const el = contentRef.current;
        if (!el) return;
        // Determine overflow based on the collapsed height threshold.
        const hasOverflow = el.scrollHeight > COLLAPSED_HEIGHT;
        setIsOverflowing(prev => (prev === hasOverflow ? prev : hasOverflow));
    };

    useLayoutEffect(() => {
        // Initial measurement after paint.
        window.requestAnimationFrame(checkOverflow);

        const ro = new ResizeObserver(() => {
            window.requestAnimationFrame(checkOverflow);
        });
        if (contentRef.current) ro.observe(contentRef.current);
        return () => ro.disconnect();
    }, []);

    return (
        <div>
            <div
                ref={contentRef}
                className={`relative w-full overflow-hidden transition-[max-height] duration-200 ${isExpanded ? "max-h-[1000px]" : "max-h-23"}`}
            >
                {children}
            </div>
            {isOverflowing && (
                <button
                    className="mt-2 text-sm underline underline-offset-4"
                    onClick={() => setIsExpanded(prev => !prev)}
                >
                    {
                        isExpanded ? 
                        <div className="underline underline-offset-4 flex flex-row cursor-pointer">
                            <p>Show less</p>
                        </div>
                        : 
                        <div className="underline underline-offset-4 flex flex-row cursor-pointer">
                            <p>Show more</p>
                        </div>
                    }
                </button>
            )}
        </div>
    );
}