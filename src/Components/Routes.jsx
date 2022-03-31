import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { Navbar } from "./Navbar";
import React from "react";
import { Route,Routes } from "react-router";


export const RoutesComp = () => {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<HomePage></HomePage>} />
       <Route path="/products" element={<ProductsPage></ProductsPage>} />
       <Route
         path="/products/:id"
         element={<ProductsDetailsPage></ProductsDetailsPage>}
       ></Route>
     </Routes>
    </>
  );
};
