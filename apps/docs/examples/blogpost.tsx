import { format } from "date-fns";
import { Lightbulb } from "lucide-react";

import { cn } from "@repo/shadcn-ui/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@repo/shadcn-ui/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/shadcn-ui/components/ui/avatar";

const defaultPost = {
  title: "Designing websites faster with shadcn/ui",
  authorName: "John Doe",
  image:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  pubDate: new Date(),
  description:
    "A step-by-step guide to building a modern, responsive blog using React and Tailwind CSS.",
  authorImage:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
};

interface BlogPostData {
  title: string;
  authorName: string;
  image: string;
  pubDate: Date;
  description: string;
  authorImage: string;
}

interface Blogpost1Props {
  className?: string;
  post?: BlogPostData;
}

const Blogpost1 = ({ post = defaultPost, className }: Blogpost1Props) => {
  const { title, authorName, image, pubDate, description, authorImage } = post;
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-5xl font-semibold text-pretty md:text-6xl">
            {title}
          </h1>
          <h3 className="max-w-3xl text-lg text-muted-foreground md:text-xl">
            {description}
          </h3>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={authorImage} />
              <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>
              <a href="#" className="font-semibold">
                {authorName}
              </a>
              <span className="ml-1">on {format(pubDate, "MMMM d, yyyy")}</span>
            </span>
          </div>
          <img
            src={image}
            alt="placeholder"
            className="mt-4 mb-8 aspect-video w-full rounded-lg border object-cover"
          />
        </div>
      </div>
      <div className="container">
        <div className="mx-auto prose max-w-3xl dark:prose-invert">
          <h2 className="text-3xl font-extrabold">The Great Joke Tax</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            In a kingdom far away, where laughter once flowed freely, a peculiar
            tale unfolded about a king who decided to tax the very essence of
            joy itself - jokes and jest.
          </p>

          <h2>How the Tax System Works</h2>
          <p>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. Jokester was declared a
            hero, and the kingdom lived happily ever after.
          </p>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Royal Decree!</AlertTitle>
            <AlertDescription>
              Remember, all jokes must be registered at the Royal Jest Office
              before telling them
            </AlertDescription>
          </Alert>
          <h2>The People&apos;s Rebellion</h2>
          <p>
            The people of the kingdom, feeling uplifted by the laughter, started
            to tell jokes and puns again, and soon the entire kingdom was in on
            the joke.
          </p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>King&apos;s Treasury</th>
                  <th>People&apos;s happiness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Empty</td>
                  <td>Overflowing</td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td>Modest</td>
                  <td>Satisfied</td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td>Full</td>
                  <td>Ecstatic</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. Jokester was declared a
            hero, and the kingdom lived happily ever after.
          </p>

          <h2>The King&apos;s Plan</h2>

          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="my-8 aspect-video w-full rounded-md object-cover"
          />
          <p>
            The king thought long and hard, and finally came up with{" "}
            <a href="#">a brilliant plan</a>: he would tax the jokes in the
            kingdom.
          </p>
          <blockquote>
            &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
            joke, so it&apos;s only fair that they should pay for the
            privilege.&rdquo;
          </blockquote>
          <p>
            The king&apos;s subjects were not amused. They grumbled and
            complained, but the king was firm:
          </p>
          <ul>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p>
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king&apos;s
            foolishness get him down: a court jester named Jokester.
          </p>
        </div>
      </div>
    </section>
  );
};

const Example = () => <Blogpost1 />;

export default Example;
