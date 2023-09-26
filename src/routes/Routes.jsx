import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/pages/HomePage";
import AboutPage from "../views/pages/AboutPage";
import ShopPage from "../views/pages/ShopPage";
import NftPage from "../views/pages/NftPage";
import TransactionPage from "../views/pages/TransactionPage";
import PrivateRoutes from "../routes/PrivateRoutes";
import PubilcRoutes from "../routes/PubilcRoutes";
import Terms from "../views/pages/Terms";
import Layout from "../shared/components/layout";

export default function RoutesHandler() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          {/* Private Routes */}
          <Route path="/" element={<PrivateRoutes />}>
            {/* Main Pages */}
            <Route path="/nftpage" element={<NftPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
          </Route>
          {/* Pubilc Routes */}
          <Route
            path="/about"
            element={
              <PubilcRoutes>
                <AboutPage />
              </PubilcRoutes>
            }
          />
        {/*Sub Contain*/}
        <Route
          path="/about/:id"
          element={
            <PubilcRoutes>
              <AboutPage />
            </PubilcRoutes>
          }
        />
        <Route
          path="/shop"
          element={
            <PubilcRoutes>
              <ShopPage />
            </PubilcRoutes>
          }
        />
        <Route
          path="/terms"
          element={
            <PubilcRoutes>
              <Terms />
            </PubilcRoutes>
          }
        />
        {/*Sub Contain*/}
        <Route
          path="/terms/:id"
          element={
            <PubilcRoutes>
              <Terms />
            </PubilcRoutes>
          }
        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
