type Props = {
    logo: string;
    company: string;
    title: string,
    focus: string,
    timeline: string,
    description: string,
    blogLink?: string;
};

export function WorkCard({ 
    logo, 
    company,
    title, 
    focus,
    timeline,
    description, 
    blogLink, 
}: Props) {
    const cardContent = (
        <>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center flex-1 min-w-0">
                    <img
                        src={logo}
                        alt={`${company} logo`}
                        className="w-[60px] h-auto mr-5 flex-shrink-0"
                    />
                    <h3 className="min-w-0">
                        <span className="text-xl font-semibold">
                            {title}
                        </span>
                        <span className="text-lg">
                            &nbsp;-&nbsp;{focus}
                        </span>
                    </h3>
                </div>
                <div className="ml-4 mb-4 flex-shrink-0 min-w-[140px]">
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                        {timeline}
                    </span>
                </div>
            </div>
            <p className="mt-2 text-grey">{description}</p>
        </>
    );

    if (blogLink) {
        return (
            <a href={blogLink} rel="noopener noreferrer" className="block">
                <div className="border border-foreground rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    {cardContent}
                </div>
            </a>
        );
    }

    return (
        <div className="border border-foreground rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            {cardContent}
        </div>
    );
}
