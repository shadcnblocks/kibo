import { cn } from "@repo/shadcn-ui/lib/utils";

import { Badge } from "@repo/shadcn-ui/components/ui/badge";

interface ComplianceBadge {
  image: string;
  alt: string;
}

interface ComplianceFeature {
  title: string;
  description: string;
  badgeImage: string;
  badgeAlt: string;
}

interface Compliance1Props {
  tagline?: string;
  heading?: string;
  description?: string;
  badges?: ComplianceBadge[];
  features?: ComplianceFeature[];
  className?: string;
}

const Compliance1 = ({
  tagline = "Compliance",
  heading = "Complete Compliance & Security Readiness",
  description = "Stay compliant with privacy and healthcare regulations. Our platform meets GDPR and HIPAA requirements, providing data protection and compliance monitoring for regulated industries.",
  badges = [
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg",
      alt: "GDPR",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg",
      alt: "CCPA",
    },
  ],
  features = [
    {
      title: "Automated audit trails",
      description:
        "Every action is logged and timestamped with immutable audit trails for complete regulatory compliance.",
      badgeImage:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
      badgeAlt: "ISO-27001",
    },
    {
      title: "Compliance monitoring",
      description:
        "Real-time monitoring ensures continuous compliance with industry standards and regulations.",
      badgeImage:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27017.svg",
      badgeAlt: "ISO-27017",
    },
    {
      title: "Regulatory reporting",
      description:
        "Generate compliance reports automatically to meet regulatory requirements and audit demands.",
      badgeImage:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27018.svg",
      badgeAlt: "ISO-27018",
    },
  ],
  className,
}: Compliance1Props) => {
  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Badge variant="outline" className="gap-1.5 bg-background">
              <span className="size-1.5 rounded-full bg-green-500" />
              {tagline}
            </Badge>
            <h1 className="text-4xl font-medium text-balance lg:text-5xl">
              {heading}
            </h1>
            <p className="text-lg text-muted-foreground">{description}</p>
            <div className="flex items-center gap-6">
              {badges.map((badge, index) => (
                <img
                  key={index}
                  src={badge.image}
                  alt={badge.alt}
                  className="h-22 opacity-50 grayscale md:h-28 dark:invert"
                />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "relative overflow-hidden p-6 lg:px-8 lg:py-11",
                  index === 0 && "border-b border-border",
                  index === features.length - 1 && "border-t border-border"
                )}
              >
                <div>
                  <h2 className="text-xl font-medium lg:text-2xl">
                    {feature.title}
                  </h2>
                  <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
                <img
                  src={feature.badgeImage}
                  alt={feature.badgeAlt}
                  className="absolute right-4 -bottom-7 size-24 text-muted-foreground opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/compliance1
export default function ComplianceExample() {
  return <Compliance1 />;
}
