import React from "react";
import create from "zustand";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

interface ScrollState {
  sectionRefs: SectionRefs;
  scrollToSection: (sectionName: keyof SectionRefs) => void;
}

export const useScrollStore = create<ScrollState>((set, get) => ({
  sectionRefs: {
    FAQ: React.createRef<HTMLDivElement>(),
    Receiving: React.createRef<HTMLDivElement>(),
    Info: React.createRef<HTMLDivElement>(),
    Rules: React.createRef<HTMLDivElement>(),
  },
  scrollToSection: (sectionName) => {
    const refs = get().sectionRefs;
    refs[sectionName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  },
}));
