import { Box, Button, Modal, Typography } from "@mui/material";
import { ModalContainer } from "./styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useModalStore } from "@/store/modalStore";

export const ErrorModal = () => {
  const { isOpen, closeModal } = useModalStore();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <ModalContainer bgcolor="background.default">
        <Box position="absolute" top="20px" right="20px">
          <Button variant="text" onClick={closeModal}>
            <CloseRoundedIcon />
          </Button>
        </Box>
        <Typography variant="h4" color="error.main" mb="20px">
          Error
        </Typography>
        <Typography variant="h6" color="black.dark">
          Something went wrong, try another provider
        </Typography>
      </ModalContainer>
    </Modal>
  );
};
