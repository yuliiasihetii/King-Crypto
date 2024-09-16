import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { faqData } from "./common";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useScrollStore } from "@/store/scrollStore";

export const FAQ = () => {
  const { sectionRefs } = useScrollStore();
  return (
    <Box ref={sectionRefs.FAQ}>
      <Typography variant="h2" align="center" mb="40px">
        FAQ
      </Typography>
      <Box maxWidth="900px" margin="0 auto" padding="20px">
        {faqData.map(({ title, text }, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="black.dark"> {text}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
