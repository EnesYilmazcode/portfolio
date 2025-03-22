"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { IconClock, IconMapPin } from "@tabler/icons-react";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="mx-auto grid grid-cols-1 gap-4">
      <GridItem
        title="Ohio State University - Student Researcher"
        description="Working under Dr. Qadeer, researching virtual control implementation for skid steers and V2X cloud technology."
        dateRange="February 2025 - Present"
        location="Columbus, OH"
      />
      <GridItem
        title="Rockwell Automation - Rockwell Engineering Pathway Program Intern"
        description="Created an internal efficiency project using Jira's API to help managers improve their teams' productivity."
        dateRange="June 2024 - August 2024"
        location="Mayfield Heights, OH"
      />
      <GridItem
        title="Northeast Ohio Medical University - Computational Research Intern"
        description="Automated data analysis of peptides and studied ethanol's effects on mice using Python."
        dateRange="July 2023 - August 2023"
        location="Rootstown, OH"
      />
      <GridItem
        title="Inspirit AI - AI Scholar"
        description="Integrated machine learning models, including VGG16, for distracted driving detection."
        dateRange="June 2023 - July 2023"
        location="Palo Alto, CA"
      />
      <GridItem
        title="Hyland Tech Club - Team Lead"
        description="Led a team in full-stack development, creating Be-Sound, an app for music discovery using Spotify's API."
        dateRange="September 2022 - December 2022"
        location="Westlake, OH"
      />
      <GridItem
        title="Hyland Software - Y.O.U. Software Engineering Intern"
        description="Constructed an interactive ordering website and taught coding to underprivileged students."
        dateRange="June 2022 - August 2022"
        location="Westlake, OH"
      />
    </ul>
  );
}

interface GridItemProps {
  title: string;
  description: React.ReactNode;
  dateRange: string;
  location: string;
}

const GridItem = ({ title, description, dateRange, location }: GridItemProps) => {
  return (
    <li className="list-none w-[56rem] max-w-full mx-auto">
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-xl border-0.75 p-4 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-4">
          <div className="flex justify-between items-center">
            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
              {title}
            </h3>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <IconClock className="h-6 w-6 text-neutral-500" />
                <span className="absolute right-0 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  {dateRange}
                </span>
              </div>
              <div className="relative group">
                <IconMapPin className="h-6 w-6 text-neutral-500" />
                <span className="absolute right-0 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  {location}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2
              className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-black dark:text-neutral-400"
            >
              {description}
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
};