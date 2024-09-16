import { forDesktop } from "@/styles/responsive";
import { Box, Stack, styled } from "@mui/material";

export const HeaderContainer = styled(Stack)({
  justifyContent: "space-between",
  alignItems: "center",
  padding: 8,
  maxWidth: "1160px",
  borderRadius: 12,
  margin: "0 20px",

  [forDesktop]: {
    margin: "0 auto",
  },
});

export const InstructionContainer = styled(Stack)({
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
  justifyContent: "center",
  width: 270,
  padding: "35px 28px 47px",
  border: "1px solid #eff2fc",
  borderRadius: 6,
});

export const PeaceOfMindContainer = styled(Stack)({
  flexDirection: "column",
  borderRadius: "24px",
  padding: "50px",
  justifyContent: "space-around",
  alignItems: "center",
  maxWidth: "1200px",
  gap: "50px",
  margin: "120px 20px 0",

  [forDesktop]: {
    flexDirection: "row",
    margin: "120px auto 0",
  },
});

export const RulesInformationContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",
  gap: "60px",
  maxWidth: "1200px",
  margin: "0 auto",

  [forDesktop]: {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
  },
});

export const AchievementItemContainer = styled(Stack)({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
  width: 350,
  height: 350,
  borderRadius: "50%",
  border: "1px solid #eff2fc",
});

export const ModalContainer = styled(Stack)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  flexDirection: "column",
  padding: "30px",
  borderRadius: "16px",
});
