import { Button } from "@/components/ui/button";
const About = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center">
      <Button variant="outline">Who we are</Button>
      <h2 className="text-2xl font-bold">We are Radison, we help founders like you to automate their day to day business operations with the help of AI</h2>
    </section>
  );
};

export default About;
