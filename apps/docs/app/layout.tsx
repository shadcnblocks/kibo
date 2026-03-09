import "./global.css";
import { Toaster } from "@repo/shadcn-ui/components/ui/sonner";
import { TooltipProvider } from "@repo/shadcn-ui/components/ui/tooltip";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { RootProvider } from "fumadocs-ui/provider/next";
import PlausibleProvider from "next-plausible";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme";
import { mono, sans } from "../lib/fonts";

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html
    className={cn(
      "touch-manipulation font-sans antialiased",
      sans.variable,
      mono.variable,
    )}
    lang="en"
    suppressHydrationWarning
  >
    <head />
    <body className="flex min-h-screen flex-col">
      <PlausibleProvider domain="kibo-ui.com">
        <ThemeProvider>
          <RootProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </RootProvider>
          <VercelAnalytics />
        </ThemeProvider>
        <Toaster />
      </PlausibleProvider>
    </body>
  </html>
);

export default Layout;
