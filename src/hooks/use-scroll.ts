import { useRef } from "react";

export type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

export const useScroll = () => {
  const sectionRefs: SectionRefs = {
    FAQ: useRef<HTMLDivElement>(null),
    Receiving: useRef<HTMLDivElement>(null),
    Info: useRef<HTMLDivElement>(null),
    Rules: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionName: keyof SectionRefs) => {
    sectionRefs[sectionName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { sectionRefs, scrollToSection };
};
