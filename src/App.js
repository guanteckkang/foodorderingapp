import { Fragment, Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { CartContextProvider } from "./content/cart-contex";
import { ItemContextProvider } from "./content/item-contex";
import { Footer } from "./components/footer/footer";
import { Loading } from "./components/loading";
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { NotFound } from "./components/404notfound/404";
import Header from "./components/header/header";

export default function App() {
  const [id, setId] = useState(false);
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ItemContextProvider>
          <Header id={id} setId={setId} />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={id ? <User id={id} /> : <Admin />} />
              <Route path="*" element={<NotFound setId={setId} />} />
            </Routes>
          </Suspense>
          <Footer id={id} setId={setId} />
        </ItemContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}
