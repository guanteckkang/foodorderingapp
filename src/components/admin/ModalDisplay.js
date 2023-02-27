import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ItemUseContext } from "../../content/item-contex";
import { CartUseContext } from "../../content/cart-contex";
import "./modaldisplay.css";
import { useRef, useState, useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DisplayModal() {
  const { handleClose, modal, open, data } = ItemUseContext();
  const { menu, setMenu } = CartUseContext();

  function Edit() {
    const [iteminfo, setItemInfo] = useState(data);
    const { name, sku, price, quantity, description, url } = iteminfo;

    function editchange() {
      const updateditem = menu.map((each) => {
        if (each.sku == sku) {
          return {
            ...each,
            name: name,
            sku: sku,
            price: JSON.parse(price),
            description: description,
            quantity: JSON.parse(quantity),
            url: url,
          };
        } else return each;
      });
      setMenu(updateditem);
      console.log(name);
      handleClose();
    }
    useEffect(() => {
      console.table(iteminfo);
    }, [iteminfo]);
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>{name}</h3>
        <div id="modalform">
          <div id="form">
            <div>
              <label>Name: </label>
              <input
                placeholder="name..."
                type="text"
                value={name}
                onChange={(e) => {
                  setItemInfo({ ...iteminfo, name: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label>SKU: </label>
              <input
                placeholder="SKU..."
                type="text"
                value={sku}
                onChange={(e) => {
                  setItemInfo({ ...iteminfo, sku: e.currentTarget.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>Price: </label>
              <input
                placeholder="price..."
                type="number"
                value={price}
                onChange={(e) => {
                  setItemInfo({ ...iteminfo, price: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label>Quantity: </label>
              <input
                placeholder="quantity..."
                type="number"
                value={quantity}
                onChange={(e) => {
                  setItemInfo({ ...iteminfo, quantity: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label>Description: </label>
              <input
                placeholder="description..."
                type="text"
                value={description}
                onChange={(e) => {
                  setItemInfo({ ...iteminfo, description: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label>URL: </label>
              <input
                placeholder="url..."
                type="text"
                value={url}
                onChange={(e) => {
                  setItemInfo({ ...iteminfo, url: e.target.value });
                }}
              ></input>
            </div>
          </div>
          <div id="savebuttonbox">
            <Button id="savebutton" onClick={editchange}>
              SAVE
            </Button>
          </div>
        </div>
      </div>
    );
  }
  function Erase() {
    const { name } = data;

    const yes = () => {
      const filter = menu.filter((e) => {
        return e.name != name;
      });
      setMenu(filter);
      handleClose();
    };
    return (
      <div>
        <h2>Delete '{name}'?</h2>
        <div id="button2">
          <Button
            style={{ color: "red" }}
            id="button3"
            onClick={() => {
              yes();
            }}
          >
            YES
          </Button>
          <Button style={{ color: "blue" }} id="button3" onClick={handleClose}>
            NO
          </Button>
        </div>
      </div>
    );
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
