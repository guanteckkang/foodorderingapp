import "./footer.css";
import { useNavigate } from "react-router-dom";
import { CartUseContext } from "../../content/cart-contex";

export const Footer = ({ id, setId }) => {
  const { showmodal } = CartUseContext();
  const navigate = useNavigate();
  return (
    <div className="footer">
      {id === false || id === null ? (
        <></>
      ) : (
        <button onClick={showmodal} className="footer1">
          Cart
        </button>
      )}

      <button
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
      </button>
    </div>
  );
};
