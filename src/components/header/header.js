import { AppBar, Toolbar, IconButton, Button, Input } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import { CartUseContext } from "../../content/cart-contex";
import reverse from "../../img/reverse.png";
import { useState, useEffect } from "react";

const style = {
  color: "red",
  backgroundColor: "rgba(249, 180, 45, 0.9)",
};

export default function Header({ id, setId }) {
  const { cart, text, setText, showmodal, setSearch } = CartUseContext();
  useEffect(() => {
    setSearch(text);
  }, [text]);

  return (
    <AppBar position="sticky" sx={style}>
      <Toolbar>
        <img src={reverse} width="50px" disabled />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WcDonalds
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {id ? "" : "Item Management"}
        </Typography>
        {id ? (
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <ClearIcon
              sx={{ color: "disabled", mr: 1, my: 0.5 }}
              onClick={() => {
                setText("");
                setSearch("");
              }}
            />
            <TextField
              id="input-with-sx"
              label="search..."
              variant="standard"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Box>
        ) : (
          <></>
        )}
        {id ? (
          <Button
            color="inherit"
            style={{ fontSize: "20px", textTransform: "capitalize" }}
            onClick={showmodal}
          >
            {<ShoppingCartIcon />} Your Cart {cart.length}
          </Button>
        ) : (
          <></>
        )}

        {/* <Button
          color="inherit"
          onClick={() => {
            setId(!id);
          }}
        >
          {id ? "User" : "Admin"}
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}
