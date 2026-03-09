import { cn } from "@repo/shadcn-ui/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/shadcn-ui/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq1 = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: "What is a FAQ?",
      answer:
        "A FAQ is a list of frequently asked questions and answers on a particular topic.",
    },
    {
      id: "faq-2",
      question: "What is the purpose of a FAQ?",
      answer:
        "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
    },
    {
      id: "faq-3",
      question: "How do I create a FAQ?",
      answer:
        "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
    },
    {
      id: "faq-4",
      question: "What are the benefits of a FAQ?",
      answer:
        "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
    },
    {
      id: "faq-5",
      question: "How should I organize my FAQ?",
      answer:
        "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
    },
    {
      id: "faq-6",
      question: "How long should FAQ answers be?",
      answer:
        "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
    },
    {
      id: "faq-7",
      question: "Should I include links in my FAQ?",
      answer:
        "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.",
    },
  ],
  className,
}: Faq1Props) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={item.id} value={`item-${String(index)}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Based on https://shadcnblocks.com/block/faq1
export default function FaqExample() {
  return <Faq1 />;
}
