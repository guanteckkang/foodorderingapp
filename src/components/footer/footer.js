import "./footer.css";
import { useNavigate } from "react-router-dom";
import { CartUseContext } from "../../content/cart-contex";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

export const Footer = ({ id, setId }) => {
  const { showmodal, cart } = CartUseContext();
  const navigate = useNavigate();

  const mainstyle = {
    position: "fixed",
    right: "3%",
    bottom: "10%",
    marginBottom: "10px",
  };
  const style = {
    position: "absolute",
    color: "red",
    fontSize: "30px",
    right: "10px",
    bottom: "4vh",
  };
  const style2 = {
    position: "fixed",
    right: "3%",
    bottom: "5%",
  };
  return (
    <div style={mainstyle}>
      {id === false || id === null ? (
        <></>
      ) : (
        <div onClick={showmodal}>
          <ShoppingCartIcon color="warning" fontSize="large" />
          <span style={style}>{cart.length}</span>
        </div>
      )}
      <ChangeCircleIcon
        fontSize="large"
        color="warning"
        sx={style2}
        onClick={() => {
          if (id === null) {
            navigate("/");
          } else {
            setId(!id);
          }
        }}
      />
      {/* <button
        className="footer2"
        onClick={() => {
          if (id === null) {
            navigate("/");
          } else {
            setId(!id);
          }
        }}
      >
        {id === null
          ? "Return to Home"
          : id
          ? "Switch to Admin"
          : "Switch to User"}
      </button> */}
    </div>
  );
};
