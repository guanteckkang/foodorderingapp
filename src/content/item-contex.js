import { createContext, useContext, useState } from "react";
import { item } from "./item";
export const itemcontext = createContext();

export function ItemContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(0);
  const [data, setData] = useState();

  const handleOpen = (num, info) => {
    setOpen(true);
    setModal(num);
    setData(info);
  };
  const handleClose = () => setOpen(false);

  let value = {
    open,
    setOpen,
    handleOpen,
    handleClose,
    modal,
    data,
  };
  return <itemcontext.Provider value={value}>{children}</itemcontext.Provider>;
}
export function ItemUseContext() {
  return useContext(itemcontext);
}
