"use client";

import { useState } from "react";

import { cn } from "@repo/shadcn-ui/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/shadcn-ui/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface FeatureProps {
  features?: FeatureItem[];
  className?: string;
}

const Feature = ({
  features = [
    {
      id: 1,
      title: "Shadcn UI Blocks",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      description:
        "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui at shadcnblocks.com. Each block is carefully crafted to be responsive, accessible, and easily customizable.",
    },
    {
      id: 2,
      title: "Tailwind CSS & TypeScript",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw15.jpeg",
      description:
        "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code.",
    },
    {
      id: 3,
      title: "Dark Mode & Customization",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw20.jpeg",
      description:
        "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration.",
    },
    {
      id: 4,
      title: "Accessibility First",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw21.jpeg",
      description:
        "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation, and semantic HTML.",
    },
  ],
  className,
}: FeatureProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-semibold md:text-4xl">Features</h2>
        <div className="flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {features.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${String(tab.id)}`}
                  className="transition-opacity hover:opacity-80"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h4
                      className={`text-xl ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <p className="text-base text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
            <div className="relative aspect-[4/3]">
              {features.map((feature) => (
                <img
                  key={feature.id}
                  src={feature.image}
                  alt={feature.title}
                  className={cn(
                    "absolute inset-0 h-full w-full rounded-md object-cover transition-opacity duration-500",
                    activeImage === feature.image ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/feature197
export default function FeatureExample() {
  return <Feature />;
}
