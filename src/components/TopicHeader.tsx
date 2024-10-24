"use client";


interface TopicHeaderProps {
    title: string;
}

export function TopicHeader({ title }: TopicHeaderProps) {
    return (
      <div className="flex justify-center pt-24">
            <h1 className="pb-4 text-6xl font-semibold text-primary border-b-2 border-foreground inline-block mx-auto w-full max-w-lg text-center">
                {title}
            </h1>
      </div>
    );
  }