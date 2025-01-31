import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* Baki sab cheezon ko same rkhega bss outlet wala part hum modify kr skte hai */}
    </>
  );
}

export default Layout;
