import "./addMenu.css";
import { useState, useRef } from "react";
import { CartUseContext } from "../../content/cart-contex";
import { textAlign } from "@mui/system";

export function AddMenu() {
  const { menu, setMenu } = CartUseContext();

  const nameRef = useRef();
  const skuRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const descriptionRef = useRef();
  const urlRef = useRef();

  function resetvalue() {
    skuRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
    descriptionRef.current.value = "";
    urlRef.current.value = "";
  }

  function add(e) {
    e.preventDefault();
    const compareSKU = menu.findIndex((i) => {
      return i.sku == skuRef.current.value;
    });
    if (
      compareSKU == -1 &&
      priceRef.current.value >= 0 &&
      quantityRef.current.value > 0
    ) {
      const item = {
        sku: skuRef.current.value,
        display: true,
        name: nameRef.current.value,
        price: JSON.parse(priceRef.current.value),
        quantity: JSON.parse(quantityRef.current.value),
        description: descriptionRef.current.value,
        url: urlRef.current.value,
      };
      setMenu((prev) => [...prev, item]);
      resetvalue();
    } else if (priceRef.current.value < 0) {
      alert("The price must be at least Rm 0 ");
    } else if (quantityRef.current.value <= 0) {
      alert("The quantity must be at least 1 ");
    } else {
      alert("Choose different SKU");
    }
  }
  return (
    <form id="addform" onSubmit={add}>
      <div id="addform2">
        <div className="field">
          <label>Name:</label>
          <input required type="text" ref={nameRef} placeholder="name"></input>
        </div>
        <div className="field">
          <label>SKU:</label>
          <input required type="text" ref={skuRef} placeholder="sku"></input>
        </div>
        <div className="field">
          <label>Price:</label>
          <input
            required
            type="number"
            ref={priceRef}
            placeholder="Price"
          ></input>
        </div>
        <div className="field">
          <label>Quantity:</label>
          <input
            required
            type="number"
            ref={quantityRef}
            placeholder="quantity"
          ></input>
        </div>
        <div className="field">
          <label>Description:</label>
          <input
            required
            type="text"
            ref={descriptionRef}
            placeholder="description"
          ></input>
        </div>
        <div className="field">
          <label>URL:</label>
          <input required type="text" ref={urlRef} placeholder="url"></input>
        </div>
      </div>
      <div id="addbuttonbox">
        <button id="addbutton">Add</button>
      </div>
    </form>
  );
}
