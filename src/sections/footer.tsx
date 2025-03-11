import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative text-foreground bg-black">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button type="submit">Subscribe</Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block hover:text-primary">Home</a>
              <a href="#" className="block hover:text-primary">About Us</a>
              <a href="#" className="block hover:text-primary">Services</a>
              <a href="#" className="block hover:text-primary">Products</a>
              <a href="#" className="block hover:text-primary">Contact</a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <a href="#" className="rounded-full p-2 border border-gray-700 hover:bg-primary transition">
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="rounded-full p-2 border border-gray-700 hover:bg-primary transition">
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="rounded-full p-2 border border-gray-700 hover:bg-primary transition">
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="rounded-full p-2 border border-gray-700 hover:bg-primary transition">
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Cookie Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

