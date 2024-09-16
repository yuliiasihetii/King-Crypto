import { HeroSection } from "./HeroSection";
import { InstructionForParticipate } from "./InstructionForParticipate";
import { FAQ } from "./FAQ";
import { AskQuestion } from "./AskQuestion";
import { PeaceOfMind } from "./PeaceOfMind";
import { RulesInformation } from "./Rules&Information";
import { KYC } from "./KYC";
import { Achievement } from "./Achievement";
import { Receiving } from "./Receiving";
import { ErrorModal } from "./ErrorModal";

export const Layout = () => {
  return (
    <>
      <HeroSection />
      <KYC />
      <Achievement />
      <RulesInformation />
      <Receiving />
      <PeaceOfMind />
      <InstructionForParticipate />
      <FAQ />
      <AskQuestion />
      <ErrorModal />
    </>
  );
};
