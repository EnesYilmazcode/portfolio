import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            item.image ? (
              <div className="relative w-full h-48 sm:h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            ) : (
              <Skeleton />
            )
          }
          className={i === 3? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Astrophotography",
    description: "Pictured is the Orion Nebula",
    header: <Skeleton />,
    image: "/images/orion.jpg", // Ensure this exists in /public/images/
  },
  {
    title: "Car Spotting",
    description: "Pictured is a Bugatti Chiron",
    header: <Skeleton />,
    image: "/images/car_spotting.jpg", // Ensure this exists in /public/images/
  },
  {
    title: "Flipping Tech on eBay",
    description: "Made ~$12k since I started in August 2024",
    header: <Skeleton />,
    image: "/images/flippingtech.jpg", // Ensure this exists in /public/images/
  },
  {
    title: "Observing Nature",
    description: "Pictured is the Smokey Mountains in Anakeesta, TN",
    header: <Skeleton />,
    image: "/images/nature_pano.jpg", // Ensure this exists in /public/images/
  },
  {
    title: "Mentoring Youth",
    description: "Organized youth activities as a Yasep Mentor",
    header: <Skeleton />,
    image: "/images/mentor.jpg", // Ensure this exists in /public/images/
  },
];

