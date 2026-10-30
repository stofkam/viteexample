import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="app-grid">
      <div className="content">
        <Header />
        <main>
          {/* СЮДА будет подставляться дочерний роут */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
