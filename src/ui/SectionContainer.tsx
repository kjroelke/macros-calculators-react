export default function SectionContainer({
    children,
    id,
    className,
}: {
    children: React.ReactNode;
    id: string | undefined;
    className?: string;
}) {
    return (
        <section
            id={id}
            className={`p-7 rounded-2xl dark:border-primary-light border-primary border-2 overflow-hidden ${className}`}>
            {children}
        </section>
    );
}
