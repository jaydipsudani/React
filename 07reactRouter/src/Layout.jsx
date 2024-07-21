import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
    </>
  );
}

export default Layout;
