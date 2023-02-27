import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CheckOut } from "./CheckOut";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflowY: "scroll",
  p: 4,
};

export default function BasicModal({ isValid, showmodal, hidemodal }) {
  return (
    <Modal
      open={isValid}
      onClose={hidemodal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ marginBottom: "50px" }}
      sx={{ marginBottom: "60px" }}
    >
      <Box sx={style}>
        <CheckOut />
      </Box>
    </Modal>
  );
}
