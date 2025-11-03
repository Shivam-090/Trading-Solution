import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import OrdersHome from "./components/right/Orders/OrdersHome";
import Gtt from "./components/right/Orders/Gtt";
import Sip from "./components/right/Orders/Sip";
import Baskets from "./components/right/Orders/Baskets";
import Alerts from "./components/right/Orders/Alerts";
import Holdings from "./pages/Holdings";
import Equity from "./components/right/holdings/Equity";
import All from "./components/right/holdings/All";
import MutualFunds from "./components/right/holdings/MutualFunds";
import Positions from "./pages/Positions";
import Bids from "./pages/Bids";
import Ipo from "./components/right/Bids/Ipo";
import Sse from "./components/right/Bids/Sse";
import CorporateActions from "./components/right/Bids/CorporateActions";
import Auctions from "./components/right/Bids/Auctions";
import GovtSecurities from "./components/right/Bids/GovtSecurities";
import Funds from "./pages/Funds";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />

              <Route path="/orders" element={<Orders />}>
              <Route index element={<OrdersHome />} />
              <Route path="/orders/gtt" element={<Gtt />} />
              <Route path="/orders/baskets" element={<Baskets />} />
              <Route path="/orders/sip" element={<Sip />} />
              <Route path="/orders/alerts" element={<Alerts />} />
              </Route>

              <Route path="/holdings" element={<Holdings />}>
              <Route index element={<Equity />} />
              <Route path="/holdings/all" element={<All />} />
              <Route path="/holdings/mutualfunds" element={<MutualFunds />} />
              </Route>

              <Route path="/positions" element={<Positions />} />

              <Route path='/bids' element={<Bids />}>
              <Route index element={<Ipo />} />
              <Route path="/bids/gsecs" element={<GovtSecurities />} />
              <Route path="/bids/auctions" element={<Auctions />} />
              <Route path="/bids/corporateactions" element={<CorporateActions />} />
              <Route path="/bids/sse" element={<Sse />} />
              </Route>

              <Route path="/funds" element={<Funds />} />
              

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
