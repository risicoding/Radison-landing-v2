import {
  Workflow,
  Bolt,
  Brain,
  Settings,
  BarChart,
  ShieldCheck,
} from "lucide-react";

export const heroSection = {
  banner: {
    icon: "",
    text: "Radison - AI Automation Partner",
    smText: "Radison AI",
  },
  title: "Transforming workflows with ai powered automation",
  subtitle:
    "Experience the future of bussiness with intelligent , scalable automation solution tailored to your needs",
  smSubtitle: "Experience the future of bussiness automation",
  cta: [
    { text: "Our services", link: "/" },
    { text: "See Plans", link: "/" },
  ],
  testimonials: [],
};

export const aboutSection = {
  buttonText: "Who We Are",
  text: "We are radison we help founders like you to automate their day to day business operations with the help of AI. Skyrocket your business growth today",
};

export const features = [
  {
    title: "AI-Powered Automation",
    description:
      "Leverage cutting-edge AI to streamline and enhance your business operations effortlessly.",
    icon: <Brain />,
  },
  {
    title: "Intelligent Workflows",
    description:
      "Automate repetitive tasks and create smart workflows that adapt to your needs.",
    icon: <Workflow />,
  },
  {
    title: "Scalable Solutions",
    description:
      "Our automation grows with your business, ensuring efficiency at every stage.",
    icon: <BarChart />,
  },
  {
    title: "Lightning-Fast Execution",
    description:
      "Experience real-time automation that speeds up your workflow without compromising accuracy.",
    icon: <Bolt />,
  },
  {
    title: "Seamless Integration",
    description:
      "Easily integrate with your existing tools and systems for a smooth transition.",
    icon: <Settings />,
  },
  {
    title: "Secure & Reliable",
    description:
      "We prioritize security and reliability, ensuring your data is protected at all times.",
    icon: <ShieldCheck />,
  },
  {
    title: "AI-Powered Insights",
    description:
      "Gain valuable data-driven insights to optimize decision-making and improve efficiency.",
    icon: <BarChart />,
  },
  {
    title: "Adaptive Learning",
    description:
      "Our AI continuously learns and adapts to improve automation accuracy and effectiveness.",
    icon: <Brain />,
  },
];
