import { cn } from "@repo/shadcn-ui/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/shadcn-ui/components/ui/avatar";

interface Testimonial10Props {
  className?: string;
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const Testimonial10 = ({
  className,
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  author = {
    name: "Customer Name",
    role: "Role",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
}: Testimonial10Props) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">{author.name}</p>
              <p className="text-sm text-muted-foreground md:text-base">
                {author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/testimonial10
export default function TestimonialExample() {
  return <Testimonial10 />;
}
