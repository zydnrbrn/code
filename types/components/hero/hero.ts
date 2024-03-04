export type HeroProps = {
    title: string;
    description: string;
    image: string;
    cta: {
        label: string;
        href: string;
    };
    className?: string;
}