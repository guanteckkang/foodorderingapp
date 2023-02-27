import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CartUseContext } from "../../content/cart-contex";
import { useContext, useEffect, useState, useMemo } from "react";

export default function CardList({ info }) {
  const { addItem, removeItem, cart } = CartUseContext();
  const { name, description, price, url, quantity, sku } = info;

  const findItem = cart.find((e) => {
    return e.name == name;
  });

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        style={{ width: "151px" }}
        image={url}
        alt={name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Rm {price}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Quantity: {quantity}
          </Typography>
        </CardContent>
        <Box
          sx={{ display: "flex", alignItems: "justify", pl: 1, pb: 1 }}
          id="usercardbox"
        >
          <IconButton
            onClick={() => {
              removeItem({ info });
            }}
            disabled={findItem == undefined}
          >
            -
          </IconButton>
          <IconButton>{!findItem ? 0 : findItem.quantity}</IconButton>
          <IconButton
            onClick={() => {
              addItem({ info });
            }}
            disabled={quantity === 0}
          >
            +
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
