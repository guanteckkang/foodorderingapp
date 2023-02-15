import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartUseContext } from "../../content/cart-contex";

export const NotFound = () => {
  const navigate = useNavigate();
  const [setId] = CartUseContext();
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
