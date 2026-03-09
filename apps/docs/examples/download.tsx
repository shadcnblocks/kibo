import { Download, Monitor, Smartphone, Tablet } from "lucide-react";

import { cn } from "@repo/shadcn-ui/lib/utils";

import { Button } from "@repo/shadcn-ui/components/ui/button";

interface Download2Props {
  heading?: string;
  description?: string;
  platforms?: {
    desktop?: {
      title: string;
      subtitle: string;
      description: string;
      buttonText: string;
      url: string;
    };
    ios?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
    android?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
  };
  className?: string;
}

const Download2 = ({
  heading = "Download",
  description = "Choose your platform and start using our app right away. Available on all major devices and operating systems.",
  platforms = {
    desktop: {
      title: "Desktop",
      subtitle: "PC/Mac",
      description: "Complete desktop solution.",
      buttonText: "Download",
      url: "https://www.shadcnblocks.com",
    },
    ios: {
      title: "Mobile Phone",
      subtitle: "iOS",
      description: "Designed specifically for iOS devices.",
      url: "#",
    },
    android: {
      title: "Mobile Phone / Tablet",
      subtitle: "Android",
      description: "Optimized for Android ecosystem.",
      url: "#",
    },
  },
  className,
}: Download2Props) => {
  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Download Options - Minimal Grid */}
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
          {/* Desktop */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
              <Monitor className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {platforms.desktop?.subtitle}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {platforms.desktop?.description}
            </p>
            <Button size="lg" asChild>
              <a href={platforms.desktop?.url}>
                <Download className="h-4 w-4" />
                {platforms.desktop?.buttonText}
              </a>
            </Button>
          </div>

          {/* iOS */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
              <Smartphone className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {platforms.ios?.subtitle}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {platforms.ios?.description}
            </p>
            <a href={platforms.ios?.url} className="mx-auto block w-fit">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>

          {/* Android */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
              <Tablet className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {platforms.android?.subtitle}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {platforms.android?.description}
            </p>
            <a href={platforms.android?.url} className="mx-auto block w-fit">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/download2
export default function DownloadExample() {
  return <Download2 />;
}
