import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <div className='min-h-screen p-6 bg-neutral-50 '>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default App;
