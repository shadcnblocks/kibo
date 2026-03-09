import React from "react";

import { cn } from "@repo/shadcn-ui/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/shadcn-ui/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/shadcn-ui/components/ui/tooltip";

interface CompareRow {
  feature: string;
  primary: string;
  secondary: string;
  secondaryTooltip?: {
    title: string;
    description: string;
  };
}

interface Compare7Props {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  rows?: CompareRow[];
  className?: string;
}

const Compare7 = ({
  heading = "Compare",
  description = "A modern framework for building websites that is better than the competition.",
  primaryLabel = "Shadcn",
  secondaryLabel = "Bootstrap",
  rows = [
    {
      feature: "Design System",
      primary: "Modern, Utility-first",
      secondary: "Classic, Component-based",
    },
    {
      feature: "Customization",
      primary: "Highly customizable",
      secondary: "Limited by default",
    },
    {
      feature: "Dark Mode",
      primary: "Built-in",
      secondary: "Requires extra setup",
    },
    {
      feature: "TypeScript Support",
      primary: "First-class",
      secondary: "Partial",
    },
    {
      feature: "Accessibility",
      primary: "Focus on a11y",
      secondary: "Basic",
    },
    {
      feature: "Component Count",
      primary: "30+",
      secondary: "25+",
    },
    {
      feature: "License",
      primary: "MIT",
      secondary: "MIT",
    },
    {
      feature: "Premium Components",
      primary: "Available",
      secondary: "Not included",
      secondaryTooltip: {
        title: "Premium Only",
        description:
          "Some advanced components are only available in paid versions or require third-party libraries.",
      },
    },
    {
      feature: "Figma Kit",
      primary: "Yes",
      secondary: "No",
      secondaryTooltip: {
        title: "Figma Kit Unavailable",
        description:
          "Bootstrap does not provide an official Figma kit, but community kits may exist.",
      },
    },
  ],
  className,
}: Compare7Props) => {
  return (
    <TooltipProvider>
      <section className={cn("py-32", className)}>
        <div className="container">
          <h2 className="mb-4 text-center text-4xl font-semibold">{heading}</h2>
          <p className="mb-8 text-center text-muted-foreground">
            {description}
          </p>
          <div className="mx-auto max-w-3xl overflow-x-auto">
            <Table className="rounded border text-left shadow-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6 py-4 font-semibold">Feature</TableHead>
                  <TableHead className="bg-muted px-6 py-4 font-semibold">
                    {primaryLabel}
                  </TableHead>
                  <TableHead className="px-6 py-4 font-semibold">
                    {secondaryLabel}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-foreground">
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-6 py-4">{row.feature}</TableCell>
                    <TableCell className="bg-muted px-6 py-4">
                      {row.primary}
                    </TableCell>
                    <TableCell className="relative px-6 py-4">
                      {row.secondaryTooltip ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-pointer underline decoration-dotted">
                              {row.secondary}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent sideOffset={8} className="max-w-xs">
                            <span className="mb-1 block font-semibold">
                              {row.secondaryTooltip.title}
                            </span>
                            {row.secondaryTooltip.description}
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        row.secondary
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

// Based on https://shadcnblocks.com/block/compare7
export default function CompareExample() {
  return <Compare7 />;
}
