import { loader } from "fumadocs-core/source";
import { docs, meta } from "fumadocs-mdx:collections/server";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: "/",
  source: toFumadocsSource(docs, meta),
  icon(icon: string | undefined) {
    if (!icon) {
      return;
    }

    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
});
