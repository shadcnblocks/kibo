import { Download } from "lucide-react";
import React from "react";

import { cn } from "@repo/shadcn-ui/lib/utils";

import { Button } from "@repo/shadcn-ui/components/ui/button";

interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  company: string;
  logo: string;
}

interface Experience1Props {
  heading?: string;
  buttonText?: string;
  buttonUrl?: string;
  experience?: ExperienceItem[];
  className?: string;
}

const Experience1 = ({
  heading = "Experience",
  buttonText = "Download CV",
  buttonUrl = "#",
  experience = [
    {
      period: "Sep 2025 - Now",
      title: "Sr. Software Engineer",
      description:
        "Leading development of scalable web applications using React, TypeScript, and Node.js. Mentoring junior developers and implementing best practices.",
      company: "Google",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
    },
    {
      period: "Mar 2023 - Aug 2025",
      title: "Full Stack Developer",
      description:
        "Built and maintained multiple client websites and e-commerce platforms. Collaborated with design teams to implement pixel-perfect UI/UX designs.",
      company: "Microsoft",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/microsoft-icon.svg",
    },
    {
      period: "Jan 2021 - Feb 2023",
      title: "Frontend Developer",
      description:
        "Developed responsive web applications using modern JavaScript frameworks. Optimized performance and accessibility across multiple projects.",
      company: "Apple",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/apple-icon.svg",
    },
    {
      period: "Jun 2019 - Dec 2020",
      title: "Junior Developer",
      description:
        "Assisted in building web applications and learning modern development practices. Contributed to team projects and code reviews.",
      company: "Netflix",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/netflix-icon.svg",
    },
  ],
  className,
}: Experience1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-10 lg:space-y-20">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            {heading}
          </h1>
          <Button asChild variant="ghost" size="lg" className="font-semibold">
            <a href={buttonUrl}>
              {buttonText} <Download className="size-4" />
            </a>
          </Button>
        </div>

        <ul>
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex flex-col justify-between border-b py-10 md:flex-row"
            >
              <div className="max-w-lg text-xl tracking-tighter lg:w-1/3">
                {exp.period}
              </div>
              <div className="lg:w-1/3">
                <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
                  {exp.title}
                </h2>
                <p className="text-foreground/50">{exp.description}</p>
              </div>
              <div className="flex items-start justify-end gap-3 text-right lg:w-1/4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="size-6 dark:invert"
                />
                {exp.company}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Example = () => <Experience1 />;

export default Example;
