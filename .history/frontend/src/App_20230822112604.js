import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const App = () => {
  return (
    <PayPalScriptProvider deferLoading={true}>
      <Header />
      <main className="py-3">
        <div className='min-h-screen p-6 bg-neutral-50 flex justify-center'>
          <Outlet />
        </div>
      </main>
    </PayPalScriptProvider>
  );
};

export default App;
