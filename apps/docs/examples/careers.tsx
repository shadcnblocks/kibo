import { ArrowRight } from "lucide-react";

import { cn } from "@repo/shadcn-ui/lib/utils";

interface JobOpening {
  title: string;
  location: string;
  url: string;
}

interface JobCategory {
  category: string;
  openings: JobOpening[];
}

interface Careers4Props {
  heading?: string;
  jobs?: JobCategory[];
  className?: string;
}

const Careers4 = ({
  heading = "Careers",
  jobs = [
    {
      category: "Engineering",
      openings: [
        {
          title: "Senior Frontend Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "UI/UX Designer",
          location: "San Francisco",
          url: "#",
        },
        {
          title: "React Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Technical Lead",
          location: "London",
          url: "#",
        },
      ],
    },
    {
      category: "Design",
      openings: [
        {
          title: "Product Designer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Visual Designer",
          location: "Berlin",
          url: "#",
        },
      ],
    },
  ],
  className,
}: Careers4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-medium md:text-4xl">{heading}</h2>
        <div className="mt-6 flex flex-col gap-16 md:mt-14">
          {jobs.map((jobCategory) => (
            <div key={jobCategory.category} className="grid">
              <h2 className="border-b pb-4 text-xl font-bold">
                {jobCategory.category}
              </h2>
              {jobCategory.openings.map((job) => (
                <div
                  key={job.title}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div>
                    <a href={job.url} className="font-semibold hover:underline">
                      {job.title}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                  <a href={job.url} className="hover:text-muted-foreground">
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/careers4
export default function CareersExample() {
  return <Careers4 />;
}
