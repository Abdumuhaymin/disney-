import React from "react";
import { Header } from "./header/header";
import { HeroSec } from "./hero/heroSec";
import { Footer } from "./footer/footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="header__main">
          <div className="header__hero">
            <Header />
            <HeroSec />
          </div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
