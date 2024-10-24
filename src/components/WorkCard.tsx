type Props = {
    logo: string;
    company: string;
    title: string,
    focus: string,
    description: string,
    blogLink: string;
};

export function WorkCard({ 
    logo, 
    company,
    title, 
    focus,
    description, 
    blogLink, 
}: Props) {
    return (
        <div className="border border-foreground rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center">
                <a href={blogLink} rel="noopener noreferrer">
                    <img
                        src={logo}
                        alt={`${company} logo`}
                        className="w-[60px] h-auto mr-5"
                    />
                </a>
                <h3>
                    <span className="text-xl font-semibold">
                        {title}
                    </span>
                    <span className="text-lg">
                        &nbsp;-&nbsp;{focus}
                    </span>
                </h3>
            </div>
            <p className="mt-2 text-grey">{description}</p>
        </div>
    );
}
