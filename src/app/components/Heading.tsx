import clsx from "clsx";

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xl" | "lg" | "md" | "sm" | "xs";
    children: React.ReactNode;
    className?: string;
};

const sizeStyles = {
    xl: "text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1]",
    lg: "text-[clamp(2rem,4vw,3.75rem)] leading-[1.15]",
    md: "text-[clamp(1.5rem,3vw,3rem)] leading-[1.2]",
    sm: "text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.25]",
    xs: "text-[clamp(1rem,2vw,1.25rem)] leading-[1.3]",
};

export function Heading({
    as: Comp = "h1",
    className,
    children,
    size = "lg",
}: HeadingProps) {
    return (
        <Comp
            className={clsx(
                "font-sans uppercase tracking-tight",
                sizeStyles[size],
                className
            )}
        >
            {children}
        </Comp>
    );
}