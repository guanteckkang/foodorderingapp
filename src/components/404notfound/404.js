import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartUseContext } from "../../content/cart-contex";

export const NotFound = ({ setId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setId(null);
    setTimeout(() => {
      setId(false);
      navigate("/");
    }, 2000);
  }, []);

  return (
    <>
      <h1>404 Page not Found</h1>
    </>
  );
};
