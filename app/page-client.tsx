'use client';

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <BentoGrid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
