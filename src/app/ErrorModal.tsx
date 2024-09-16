import { Box, Button, Modal, Typography } from "@mui/material";
import { ModalContainer } from "./styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useModalStore } from "@/store/modalStore";
import { useDisconnect } from "wagmi";

export const ErrorModal = () => {
  const { isOpen, closeModal } = useModalStore();
  const { disconnect } = useDisconnect();

  const handleDisconnect = async () => {
    try {
      await disconnect();
      closeModal();
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

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
        <Box mt="20px">
          <Button variant="contained" color="error" onClick={handleDisconnect}>
            Disconnect Wallet
          </Button>
        </Box>
      </ModalContainer>
    </Modal>
  );
};
