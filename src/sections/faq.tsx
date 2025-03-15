import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export const Faq = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        {faqs.map((item, index) => (
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger>{item.header}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const faqs = [
  {
    header: "What are AI-driven automation services?",
    content:
      "AI-driven automation services leverage artificial intelligence to streamline and optimize business processes. These services use machine learning, natural language processing, and data analytics to automate repetitive tasks, improve decision-making, and enhance efficiency.",
  },
  {
    header: "What types of processes can be automated?",
    content:
      "AI automation can be applied to various business processes, including customer support, data entry, workflow automation, predictive analytics, document processing, fraud detection, and personalized marketing.",
  },
  {
    header: "How long does it take to implement AI automation?",
    content:
      "The implementation timeline depends on the complexity of the process and the level of customization required. Simple automation solutions can take a few weeks, while more complex AI integrations may take several months.",
  },
  {
    header: "Will AI automation disrupt my current operations?",
    content:
      "AI automation is designed to integrate smoothly with existing systems. While there may be an initial adjustment period, proper implementation ensures minimal disruption and enhances overall efficiency over time.",
  },
  {
    header: "How much does AI automation cost?",
    content:
      "The cost of AI automation varies based on factors such as the scope of automation, the technology stack used, and the level of customization required. Businesses can opt for subscription-based models or custom AI solutions tailored to their needs.",
  },
];
