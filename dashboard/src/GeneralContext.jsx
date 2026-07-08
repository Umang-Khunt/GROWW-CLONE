import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid,price) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
const [selectedStockPrice, setSelectedStockPrice] = useState();
  const handleOpenBuyWindow = (uid,price) => {
    setIsBuyWindowOpen(true);
    console.log(uid)
    setSelectedStockUID(uid);
    console.log(price);
    setSelectedStockPrice(price);
  };
   const handleOpenSellWindow = (uid,price) => {
    setIsSellWindowOpen(true);
    console.log(uid)
    setSelectedStockUID(uid);
    console.log(price);
    setSelectedStockPrice(price);
  };
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice}/>}
       {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} price={selectedStockPrice}/>}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;