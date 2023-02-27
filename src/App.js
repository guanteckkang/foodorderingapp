import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartContextProvider } from "./content/cart-contex";
import { ItemContextProvider } from "./content/item-contex";
import { Footer } from "./components/footer/footer";
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/User";
import { NotFound } from "./components/404notfound/404";
import Header from "./components/header/header";
import { useState } from "react";

export default function App() {
  const [id, setId] = useState(true);
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ItemContextProvider>
          <Header id={id} setId={setId} />
          <Routes>
            <Route path="/" element={id ? <User id={id} /> : <Admin />} />
            <Route path="*" element={<NotFound setId={setId} />} />
          </Routes>
          <Footer id={id} setId={setId} />
        </ItemContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}
