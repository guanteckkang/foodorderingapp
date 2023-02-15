import { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CartUseContext } from "../../content/cart-contex";
import { CartList } from "./cartlist";
import MenuCard from "./card";
import BasicModal from "./modal";
import "./user.css";

export function User() {
  const { menu, isValid, showmodal, hidemodal } = CartUseContext();
  const menu2 = menu?.filter((e) => {
    return e.display;
  });
  const menuList = menu2?.map((e, index) => {
    return <MenuCard key={index} info={e} index={index} />;
  });
  return (
    <>
      <Helmet>
        <title>User</title>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Welcome User</h1>
      <div id="menulist">{menuList}</div>
      <BasicModal
        showmodal={showmodal}
        hidemodal={hidemodal}
        isValid={isValid}
      />
    </>
  );
}
