import { ArrowRightIcon } from "lucide-react";

type BlocksCtaProps = {
  category: string;
};

const toKebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

export const BlocksCta = ({ category }: BlocksCtaProps) => {
  const href = `https://www.shadcnblocks.com/blocks/${toKebabCase(category)}`;

  return (
    <div className="not-prose mt-12 flex items-center gap-6 rounded-lg border bg-muted/50 p-6">
      <a className="hidden sm:block" href={href} rel="noopener" target="_blank">
        <img
          alt={`Shadcn UI ${category} Blocks`}
          className="h-20 w-auto rounded border object-cover transition-opacity hover:opacity-80"
          src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/screenshots/group/${toKebabCase(category)}.webp`}
        />
      </a>
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="font-medium text-foreground text-xl md:text-2xl">
          Find more premium blocks at Shadcnblocks.com
        </h3>
        <a
          className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary/80"
          href={href}
          target="_blank"
        >
          Shadcnblocks {category} blocks
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </div>
  );
};
