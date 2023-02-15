import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ItemUseContext } from "../../content/item-contex";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
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

export default function DisplayModal() {
  const { handleClose, modal, open, data } = ItemUseContext();

  function Edit() {
    const { name, sku, price, description, url } = data;
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>{name}</h3>
        <Box>
          <TextField
            required
            id="outlined-required primary"
            label="Name"
            color="primary"
            defaultValue={name}
          />
          <TextField
            required
            id="outlined-required"
            label="SKU"
            defaultValue={sku}
          />
          <TextField
            label="Price"
            id="outlined-start-adornment"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rm</InputAdornment>
              ),
            }}
            defaultValue={price}
          />
          <TextField
            required
            id="outlined-required"
            label="SKU"
            defaultValue={sku}
          />
        </Box>
      </div>
    );
  }
  function Erase() {
    return <h1>erase</h1>;
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{modal == 1 ? <Edit /> : <Erase />}</Box>
      </Modal>
    </div>
  );
}
