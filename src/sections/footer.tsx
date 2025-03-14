import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative bg-black text-foreground text-neutral-300">
      <div className="min-h-56 space-y-4 py-6">
        <h3 className="bg-gradient-to-b from-neutral-200 to-neutral-900 bg-clip-text text-3xl font-bold text-transparent">
          Radison-AI
        </h3>
        <ul className="text-neutral-300">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="flex gap-1">
          <FaGithub />
          <span>Made by </span>
          <a className="text-blue-500" href="https://github.com/risicoding/">Risi</a>
        </div>
      </div>
    </footer>
  );
}
