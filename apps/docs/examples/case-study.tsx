import { cn } from "@repo/shadcn-ui/lib/utils";

interface CaseStudy8Props {
  className?: string;
}

const CaseStudy8 = ({ className }: CaseStudy8Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col gap-12 lg:flex-row lg:gap-24">
        <article className="mx-auto">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="mb-8 aspect-video w-full max-w-3xl rounded-lg border object-cover"
          />
          <div className="prose dark:prose-invert">
            <h1>How Mercury uses shadcn/ui to build their design system</h1>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <h2>The King&apos;s Plan</h2>
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
            <h3>The Joke Tax</h3>
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
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king&apos;s foolishness get him down: a court jester named
              Jokester.
            </p>
            <h3>Jokester&apos;s Revolt</h3>
            <p>
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king&apos;s
              pillow, in his soup, even in the royal toilet. The king was
              furious, but he couldn&apos;t seem to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn&apos;t help
              but laugh. And once they started laughing, they couldn&apos;t
              stop.
            </p>
            <h3>The People&apos;s Rebellion</h3>
            <p>
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again, and soon the entire kingdom
              was in on the joke.
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
              error of his ways and repealed the joke tax. Jokester was declared
              a hero, and the kingdom lived happily ever after.
            </p>
            <p>
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </div>
        </article>

        <aside className="lg:max-w-[300px]">
          <div className="flex flex-col items-start rounded-lg border border-border bg-accent py-6 md:py-8">
            <div className="mb-8 px-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                alt="placeholder"
                className="max-h-8 w-full"
              />
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Company</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                Suspendisse vel euismod sem. Sed sollicitudin augue eu facilisis
                scelerisque. Nullam pharetra tortor ut massa accumsan egestas.
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Industry</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                Suspendisse volutpat
              </div>
            </div>
            <div className="mb-5 w-full border-t border-border px-6 pt-5 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Location</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                London, United Kingdom
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Company size</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                11-50
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Website</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                <a href="#" className="underline hover:text-foreground">
                  https://example.com/
                </a>
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold">Topics</div>
              <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                Sed sollicitudin augue eu facilisis scelerisque
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

const Example = () => <CaseStudy8 />;

export default Example;
