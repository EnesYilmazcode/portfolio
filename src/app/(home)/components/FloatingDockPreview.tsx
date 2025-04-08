"use client";

import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
  IconCopy,
  IconCalendarTime,
  IconCheck
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const [copied, setCopied] = useState(false);
  
  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "enesyilmaz5157@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  const openInNewTab = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  
  const links = [
    {
      title: "Resume",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: (e: React.MouseEvent) => openInNewTab("/images/Enes Yilmaz Resume.pdf", e)
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: (e: React.MouseEvent) => openInNewTab("https://www.linkedin.com/in/enes-y", e)
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: (e: React.MouseEvent) => openInNewTab("https://github.com/EnesYilmazcode", e)
    },
    {
      title: "Copy Email",
      icon: (
        copied ? 
        <IconCheck className="h-full w-full text-green-500 dark:text-green-400" /> :
        <IconCopy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: copyEmailToClipboard
    },
    {
      title: "Book a Call",
      icon: (
        <IconCalendarTime className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: (e: React.MouseEvent) => openInNewTab("https://calendly.com/enesyilmaz5157/meet-with-enes", e)
    },
  ];
  
  return (
    <div className="w-full h-full">
      <FloatingDock
        items={links}
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-4 right-4 z-50"
      />
    </div>
  );
}
