import { ArrowUpRight } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { cn } from "@repo/shadcn-ui/lib/utils";

interface SocialLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

interface Community2Props {
  heading?: string;
  description?: string;
  socialLinks?: SocialLink[];
  className?: string;
}

const Community2 = ({
  heading = "Join our community",
  description = "Connect with others, share experiences, and stay in the loop.",
  socialLinks = [
    {
      icon: <FaXTwitter className="size-5" />,
      title: "Twitter",
      description: "Follow our latest updates and announcements.",
      url: "https://x.com/shadcnblocks",
    },
    {
      icon: <FaLinkedin className="size-5" />,
      title: "LinkedIn",
      description: "Connect with us and explore career opportunities.",
      url: "https://www.linkedin.com/company/shadcnblocks",
    },
    {
      icon: <FaGithub className="size-5" />,
      title: "Github",
      description: "Contribute to our open-source projects.",
      url: "https://github.com/shadcnblocks",
    },
    {
      icon: <FaDiscord className="size-5" />,
      title: "Discord",
      description: "Join our Discord server and connect with other developers.",
      url: "#",
    },
  ],
  className,
}: Community2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">{heading}</h2>
        <p className="font-medium text-muted-foreground md:text-xl">
          {description}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="group rounded-md border border-border p-6"
              href={link.url}
            >
              <div className="flex items-center justify-between gap-4">
                {link.icon}
                <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <h3 className="mb-1 font-semibold">{link.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Example = () => <Community2 />;

export default Example;
