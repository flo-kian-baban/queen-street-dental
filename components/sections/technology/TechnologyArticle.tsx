import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';

interface TechnologyArticleProps {
    title: string;
    headerImage: string;
    featuredImage: string;
    children: React.ReactNode;
}

export default function TechnologyArticle({ title, headerImage, featuredImage, children }: TechnologyArticleProps) {
    return (
        <article className="bg-white pb-20">
            {/* Page Header with Background Image */}
            <PageHeader
                title={title}
                backgroundImage={headerImage}
            />

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-3xl mx-auto">

                    {/* Pro-Article Content Layout */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans
                        prose-headings:font-serif prose-headings:text-primary-dark prose-headings:font-bold
                        prose-p:mb-6
                        prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:my-10 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                        prose-blockquote:h4:text-accent prose-blockquote:h4:mt-0 prose-blockquote:h4:mb-4 prose-blockquote:h4:uppercase prose-blockquote:h4:text-xs prose-blockquote:h4:tracking-widest
                        prose-separator:border-accent/20
                    ">
                        {children}
                    </div>
                </div>
            </div>
        </article>
    );
}
