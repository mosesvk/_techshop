import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="max-h-fit bg-neutral-50 py-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;
