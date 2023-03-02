import { CartUseContext } from "../../content/cart-contex";
import CardList from "./CardList";
import BasicModal from "./Modal";
import { Helmet } from "react-helmet";
import "./user.css";

export function User() {
  const { menu3, isValid, showmodal, hidemodal } = CartUseContext();

  const menuList = menu3?.map((e, index) => {
    return <CardList key={index} info={e} index={index} />;
  });
  return (
    <>
      <Helmet>
        <title>User</title>
      </Helmet>

      {menuList.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No item available</h1>
      ) : (
        <div id="menulist">{menuList}</div>
      )}
      <BasicModal
        showmodal={showmodal}
        hidemodal={hidemodal}
        isValid={isValid}
      />
    </>
  );
}
