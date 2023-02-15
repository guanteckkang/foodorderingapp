import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import AirplayIcon from "@mui/icons-material/Airplay";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";
import { ItemUseContext } from "../../content/item-contex";
import { CartUseContext } from "../../content/cart-contex";
import DisplayModal from "./ModalDisplay";
export default function ItemCard({ info }) {
  const { sku, display, name, price, description, url } = info;
  const { handleOpen, open, setModal } = ItemUseContext();
  const { menu, setMenu } = CartUseContext();

  function displayItem() {
    const findItem = menu.findIndex((e) => {
      return e.sku == sku;
    });
    const updatedMenu = menu.map((each, i) => {
      if (i === findItem) {
        return {
          ...each,
          display: !display,
        };
      } else return each;
    });
    setMenu(updatedMenu);
  }

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          style={{ width: "151px" }}
          image={url}
          alt={name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              sku: {sku}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Rm {price}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton onClick={displayItem}>
              {display ? <AirplayIcon /> : <DesktopAccessDisabledIcon />}
            </IconButton>
            <IconButton
              onClick={() => {
                handleOpen(1, info);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                handleOpen(2, info);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
}
