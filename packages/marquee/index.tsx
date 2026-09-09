"use client";

import type { HTMLAttributes } from "react";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import FastMarquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

export type MarqueeProps = FastMarqueeProps & {
  fade?: boolean | "left" | "right";
};

// mask-image (not shadcn's scroll-fade) since the marquee never actually
// scrolls — scroll-fade's animation-timeline: scroll() would fade only one
// edge, permanently, because scrollLeft stays 0.
const fadeClasses = {
  left: "mask-l-from-70% mask-l-to-100%",
  right: "mask-r-from-70% mask-r-to-100%",
  true: "mask-x-from-70% mask-x-to-100%",
} as const;

export const Marquee = ({
  className,
  fade = false,
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeProps) => (
  <FastMarquee
    autoFill={autoFill}
    className={cn(
      fade && fadeClasses[fade === true ? "true" : fade],
      className
    )}
    loop={loop}
    pauseOnHover={pauseOnHover}
    {...props}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn("mx-2 flex-shrink-0 object-contain", className)}
    {...props}
  />
);
