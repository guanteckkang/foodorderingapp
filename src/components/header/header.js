import { CartUseContext } from "../../content/cart-contex";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
export default function Header({ id, setId }) {
  const { cart, showmodal } = CartUseContext();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          LOGO
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {id ? "Food Ordering" : "Manage Menu"}
        </Typography>
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

        <Button
          color="inherit"
          onClick={() => {
            setId(!id);
          }}
        >
          {id ? "User" : "Admin"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
