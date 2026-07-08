import { useState,useContext } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BarChartIcon from "@mui/icons-material/BarChart";
import GeneralContext from "./GeneralContext";

function WatchListItem({ stock }) {
  let [showWatchlistAction, SetShowWatchlistAction] = useState(false);

  const handelMouseEntry = (event) => {
    SetShowWatchlistAction(true);
  };
  const handelMouseExit = (event) => {
    SetShowWatchlistAction(false);
  };

  return (
    <>
      <li onMouseEnter={handelMouseEntry} onMouseLeave={handelMouseExit}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          {showWatchlistAction ? (
            ""
          ) : (
            <div className="itemInfo">
              <span className="percent">{stock.percent}</span>
              {stock.isDown ? (
                <KeyboardArrowDown className="down" />
              ) : (
                <KeyboardArrowUp className="up" />
              )}
              <span className={`${stock.isDown ? "down" : "up"} price`}>
                {stock.price}
              </span>
            </div>
          )}
        </div>
        {showWatchlistAction && <ShowWatchlistAction uid={stock.name} price={stock.price} />}
      </li>
    </>
  );
}

export default WatchListItem;

const ShowWatchlistAction = ({ uid,price }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    console.log(uid)
    generalContext.openBuyWindow(uid,price);
  };
  const handleSellClick = () => {
    console.log(uid)
    generalContext.openSellWindow(uid,price);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="buy"  onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="sell" onClick={handleSellClick} >Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="chart action">
            <BarChartIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="More (M)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="chart action">
            <MoreVertIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
