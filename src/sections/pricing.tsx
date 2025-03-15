import { Button } from "@/components/ui/button";
import { FaUserTie } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";

import { BsStack } from "react-icons/bs";
import { IconType } from "react-icons";

import { IoMdArrowRoundUp } from "react-icons/io";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Pricing = () => {
  return (
    <section className="flex items-center justify-center">
      <Tabs
        defaultValue="Monthly"
        className="flex flex-col items-center justify-center"
      >
        <TabsList>
          <TabsTrigger value="Monthly">Monthly</TabsTrigger>
          <TabsTrigger value="Anuallly">Anuallly</TabsTrigger>
        </TabsList>
        <TabsContent value="Monthly">
          <div className="space-y-4">
            <PricingCard
              Icon={BsStack}
              slug="Basic"
              description="Essential tools and features for starting your journey with ease"
              price={600}
              features={[
                "Basic workflow automatin",
                "Basic chatbot development",
                "60 content request",
                "E-mail support",
                "1 consultation a month",
              ]}
            />
            <PricingCard
              Icon={FaUserTie}
              slug="Proffesional"
              price={1200}
              description="Advanced capabilities designed to meet growing business needs."
              features={[
                "Advance workflow automation",
                "Advance chatbot development",
                "150 content request",
                "E-mail support",
                "2 consultation a month",
              ]}
            />
            <PricingCard
              Icon={FaBuilding}
              price="custom"
              slug="Enterprises"
              description="Comprehensive solutions tailored for large-scale business success."
              features={[
                "custom workflow automation",
                "custom chatbot development",
                "unlimited content request",
                "24 hr priority support",
                "unlimited consultation a month",
              ]}
            />
          </div>
        </TabsContent>
        <TabsContent value="Anuallly">
          <div className="space-y-4">
            <PricingCard
              Icon={BsStack}
              slug="Basic"
              description="Essential tools and features for starting your journey with ease"
              price={480}
              features={[
                "Basic workflow automatin",
                "Basic chatbot development",
                "60 content request",
                "E-mail support",
                "1 consultation a month",
              ]}
            />
            <PricingCard
              Icon={FaUserTie}
              slug="Proffesional"
              price={960}
              description="Advanced capabilities designed to meet growing business needs."
              features={[
                "Advance workflow automation",
                "Advance chatbot development",
                "150 content request",
                "E-mail support",
                "2 consultation a month",
              ]}
            />
            <PricingCard
              Icon={FaBuilding}
              price="custom"
              slug="Enterprises"
              description="Comprehensive solutions tailored for large-scale business success."
              features={[
                "custom workflow automation",
                "custom chatbot development",
                "unlimited content request",
                "24 hr priority support",
                "unlimited consultation a month",
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

type PricingCardProps = {
  Icon: IconType;
  slug: string;
  price: number | "custom";
  description: string;
  features: string[];
};

const PricingCard = ({
  Icon,
  slug,
  price,
  description,
  features,
}: PricingCardProps) => {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="rounded-sm bg-neutral-800 p-2">
            <Icon className="p-" />
          </div>
          {slug}
        </div>
        <div className="flex items-end">
          {price === "custom" ? (
            <span className="text-2xl font-semibold">Custom</span>
          ) : (
            <div>
              <span className="text-2xl font-semibold">${price}</span>
              <span>/month</span>
            </div>
          )}
        </div>
        <div>{description}</div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Button className="w-full">
          Go with this plan
          <IoMdArrowRoundUp className="rotate-[45deg]" />
        </Button>
        <div className="space-y-[7px]">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="rounded-sm bg-neutral-800 p-2">
                <FaCheck className="size-3" />
              </div>
              {item}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Pricing;
