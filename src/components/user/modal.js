import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CartList } from "./cartlist";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const style2 = {
  maxHeight: "1000px",
  overflow: "hidden",
};
export default function BasicModal({ isValid, showmodal, hidemodal }) {
  return (
    <div style={style2}>
      <Modal
        open={isValid}
        onClose={hidemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CartList />
        </Box>
      </Modal>
    </div>
  );
}
