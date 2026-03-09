import { cn } from "@repo/shadcn-ui/lib/utils";

import { Separator } from "@repo/shadcn-ui/components/ui/separator";

interface CaseStudies2Props {
  className?: string;
}

const CaseStudies2 = ({ className }: CaseStudies2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-medium">4500+ Satisfied Customers</p>
          <h2 className="text-4xl font-medium md:text-5xl">
            Real results from real users
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-xl">
                  This productivity tool transformed how we collaborate. Our
                  team's workflow improved dramatically, and we've cut meeting
                  time by half while increasing output.
                </q>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-foreground">
                      Michael Rivera
                    </p>
                    <p className="text-muted-foreground">Product Director</p>
                  </div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-foreground sm:text-5xl">
                  98%
                </p>
                <p className="font-semibold text-foreground">
                  Customer Satisfaction
                </p>
                <p className="text-muted-foreground">From verified reviews</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-foreground sm:text-5xl">
                  3.8x
                </p>
                <p className="font-semibold text-foreground">ROI Improvement</p>
                <p className="text-muted-foreground">Within first quarter</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="placeholder"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <q className="sm:text-xl">
                  The interface is intuitive and customizable to our needs. We
                  implemented it across departments with minimal training and
                  saw immediate results.
                </q>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-foreground">
                      Sarah Chen
                    </p>
                    <p className="text-muted-foreground">Operations Lead</p>
                  </div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-foreground sm:text-5xl">
                  4.2x
                </p>
                <p className="font-semibold text-foreground">Team Efficiency</p>
                <p className="text-muted-foreground">
                  Proven productivity gains
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-foreground sm:text-5xl">
                  72%
                </p>
                <p className="font-semibold text-foreground">
                  Reduced Task Time
                </p>
                <p className="text-muted-foreground">Across all projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/case-studies2
export default function CaseStudiesExample() {
  return <CaseStudies2 />;
}
