import React from 'react';

interface PageHeaderProps {
    title: string;
    backgroundImage?: string;
}

export default function PageHeader({ title, backgroundImage }: PageHeaderProps) {
    return (
        <div className="relative h-[400px] w-full overflow-hidden bg-primary-dark">
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
            )}
            <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
            <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-serif text-white font-bold tracking-wide uppercase text-center drop-shadow-md">
                    {title}
                </h1>
            </div>
        </div>
    );
}
