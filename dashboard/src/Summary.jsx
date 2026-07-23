import { useEffect,useState } from "react";
import axios from "axios";

function Summary() {
let investedAmount = 0;
  let portfolioValue = 0;

  let [availableMargin,SetAvailableMargin] = useState(0);
  let [usedMargin,SetUsedMargin] = useState(0);
  useEffect(()=>{
    axios.get("http://localhost:8080/funds",{withCredentials:true}).then((res)=>{
      
      SetAvailableMargin(res.data.fund);
      SetUsedMargin(res.data.usedMargin);
    })
  });
  let [holdingNum,SetHoldingNum] = useState(0);
  let [allHoldings, SetAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allHoldings", {
        withCredentials: true,
      })
      .then((res) => {
        SetAllHoldings(res.data);
      });
  }, []);
  if (!Array.isArray(allHoldings)) return <div>Loading...</div>;

  allHoldings.forEach((holding) => {
    investedAmount += holding.avg * holding.qty;
    portfolioValue += holding.price * holding.qty;
    // if(holding.qty > 0){
    //   SetHoldingNum(++holdingNum);
    // }
  });

    return ( <>  <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{availableMargin}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{usedMargin}</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ()</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {portfolioValue.toFixed(2)-investedAmount.toFixed(2)} <small>{(portfolioValue.toFixed(2)-investedAmount.toFixed(2))/investedAmount.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{portfolioValue.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>{investedAmount.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
</> );
}

export default Summary;