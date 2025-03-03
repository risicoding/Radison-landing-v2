import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { Button } from "@/components/ui/button";

export const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <Button variant="outline">What you get</Button>
      <BentoGrid className="mx-auto max-w-4xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);
const items = [
  {
    title: "AI-Powered Workflows",
    description:
      "Automate repetitive tasks and boost efficiency with AI-driven processes.",
    header: <Skeleton />,
  },
  {
    title: "Smart Data Insights",
    description:
      "Leverage AI analytics to gain actionable business insights in real-time.",
    header: <Skeleton />,
  },
  {
    title: "Automated Customer Support",
    description:
      "Enhance customer experience with AI chatbots and instant responses.",
    header: <Skeleton />,
  },
  {
    title: "Intelligent Scheduling",
    description: "Let AI manage your calendar and optimize meeting times.",
    header: <Skeleton />,
  },
  {
    title: "AI-Powered Marketing",
    description:
      "Generate personalized campaigns and content with AI recommendations.",
    header: <Skeleton />,
  },
  {
    title: "Automated Financial Reports",
    description:
      "Reduce manual effort with AI-driven expense tracking and reporting.",
    header: <Skeleton />,
  },
  {
    title: "Predictive Business Decisions",
    description: "Use AI forecasts to make data-backed strategic decisions.",
    header: <Skeleton />,
  },
];
