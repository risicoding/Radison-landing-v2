import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";


const reviews = [
  {
    name: "Sophia Carter",
    username: "@sophiac",
    body: "This AI saved us hours every week! Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "James Anderson",
    username: "@jamesa",
    body: "A game-changer! Our business runs smoother than ever.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Elena Martinez",
    username: "@elenam",
    body: "Seamless automation! Our team is more productive now.",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "David Brown",
    username: "@davidb",
    body: "Cut our manual work by 70%! Fantastic AI tool.",
    img: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    name: "Olivia Wilson",
    username: "@oliviaw",
    body: "Feels like having an extra team member. Love it!",
    img: "https://randomuser.me/api/portraits/women/28.jpg"
  }
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-black hover:bg-neutral-950/[.05]",
        // dark styles
        "dark:hover:bg-g-50/[.15] dark:border-gray-50/[.1] dark:bg-neutral-950",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
    </div>
  );
}
