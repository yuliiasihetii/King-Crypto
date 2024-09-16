import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HeroSection } from "./HeroSection";
import { InstructionForParticipate } from "./InstructionForParticipate";
import { FAQ } from "./FAQ";
import { AskQuestion } from "./AskQuestion";
import { PeaceOfMind } from "./PeaceOfMind";
import { RulesInformation } from "./Rules&Information";
import { KYC } from "./KYC";
import { Achievement } from "./Achievement";
import { Receiving } from "./Receiving";
import { WagmiProvider, createConfig, http } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import { useScroll } from "@/hooks/use-scroll";

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

const App = () => {
  const { sectionRefs, scrollToSection } = useScroll();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <>
              <HeroSection scrollToSection={scrollToSection} />
              <KYC sectionRefs={sectionRefs} />
              <Achievement />
              <RulesInformation sectionRefs={sectionRefs} />
              <Receiving sectionRefs={sectionRefs} />
              <PeaceOfMind />
              <InstructionForParticipate />
              <FAQ sectionRefs={sectionRefs} />
              <AskQuestion />
            </>
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
