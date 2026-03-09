import React from "react";

import { cn } from "@repo/shadcn-ui/lib/utils";

interface Awards1Props {
  className?: string;
}

const Awards1 = ({ className }: Awards1Props) => {
  const awards = [
    {
      name: "CSS Design Awards Winner",
      description: "Recognized for excellence in web design and functionality.",
      year: "2024",
      url: "#",
    },
    {
      name: "Awwwards Site of the Day",
      description:
        "Featured for outstanding creativity and innovation in web development.",
      year: "2023",
      url: "#",
    },
    {
      name: "Shadcnblocks UI Blocks",
      description:
        "Awarded for exceptional user experience and interface design.",
      year: "2023",
      url: "https://www.shadcnblocks.com",
    },
    {
      name: "Web Design Excellence",
      description:
        "Honored for superior design quality and technical implementation.",
      year: "2022",
      url: "#",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-10 lg:space-y-12">
        <h1 className="max-w-md text-5xl tracking-tighter lg:text-7xl">
          Awards
        </h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-12 border-b text-left text-sm text-foreground/80">
              <th className="font-semibold">Award</th>
              <th className="font-semibold">Description</th>
              <th className="text-right font-semibold">Year</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((award, index) => (
              <tr
                key={index}
                className="h-20 border-b text-left text-sm text-foreground/40"
              >
                <td className="text-lg font-light tracking-tight text-foreground lg:text-xl">
                  <a
                    href={award.url}
                    target="_blank"
                    className="hover:underline"
                    title={award.name}
                  >
                    {award.name}
                  </a>
                </td>
                <td>{award.description}</td>
                <td className="text-right text-foreground">{award.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/awards1
export default function AwardsExample() {
  return <Awards1 />;
}
