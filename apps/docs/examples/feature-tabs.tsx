import { Cog, Lightbulb, ListChecks } from "lucide-react";

import { cn } from "@repo/shadcn-ui/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/shadcn-ui/components/ui/tabs";

interface Feature {
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  image: string;
  url: string;
  isDefault: boolean;
}

interface Feature51Props {
  features?: Feature[];
  className?: string;
}

const Feature51 = ({
  features = [
    {
      id: "feature-1",
      heading: "Research",
      icon: <Lightbulb className="size-4" />,

      description:
        "Discover the powerful features that make our platform stand out from the rest.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      url: "https://shadcnblocks.com",
      isDefault: true,
    },
    {
      id: "feature-2",
      icon: <ListChecks className="size-4" />,

      heading: "Refine",
      description:
        "Built with the latest technology and designed for maximum productivity.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      url: "https://shadcnblocks.com",
      isDefault: false,
    },
    {
      id: "feature-3",
      icon: <Cog className="size-4" />,
      heading: "Build",
      description:
        "Create amazing experiences with our comprehensive toolkit and resources.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      url: "https://shadcnblocks.com",
      isDefault: false,
    },
  ],
  className,
}: Feature51Props) => {
  const defaultTab =
    features.find((tab) => tab.isDefault)?.id || features[0].id;

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Tabs defaultValue={defaultTab} className="p-0">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-background p-0 md:flex-row">
            {features.map((tab) => {
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`group flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal shadow-none transition-opacity duration-200 hover:border-muted hover:opacity-80 data-[state=active]:bg-muted data-[state=active]:shadow-none ${
                    tab.isDefault ? "" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                    {tab.icon && (
                      <span className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-opacity duration-200 group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground lg:size-10">
                        {tab.icon}
                      </span>
                    )}
                    <p className="text-lg font-semibold transition-opacity duration-200 md:text-2xl lg:text-xl">
                      {tab.heading}
                    </p>
                  </div>
                  <p className="font-normal text-muted-foreground transition-opacity duration-200 md:block">
                    {tab.description}
                  </p>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {features.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="transition-opacity duration-300"
            >
              <img
                src={tab.image}
                alt={tab.heading}
                className="aspect-video w-full rounded-md object-cover transition-opacity duration-300"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const Example = () => <Feature51 />;

export default Example;
