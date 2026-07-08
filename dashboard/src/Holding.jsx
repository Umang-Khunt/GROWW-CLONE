import { useState , useEffect} from "react";

import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

function Holdings() {
  let investedAmount = 0;
  let portfolioValue = 0;

  let [allHoldings,SetAllHoldings] = useState([]);

  useEffect(()=>{
      axios.get("http://localhost:8080/allHoldings").then((res)=>{
       
         SetAllHoldings(res.data);
      
      })
  },[]);

  allHoldings.forEach((holding) => {
    investedAmount += holding.avg * holding.qty;
    portfolioValue += holding.price * holding.qty;
    
  });
  
  let PL = portfolioValue - investedAmount;
  let PLClass = PL > 0 ? "profit" : "loss";

  const labels = allHoldings.map(holding=>holding.name);

const data = {
  labels,
  datasets: [
    {
      label: 'Invested',
      data: allHoldings.map((holding) => holding.avg * holding.qty),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Total Value',
      data:allHoldings.map((holding) => holding.price * holding.qty),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return (
    <>
      <div className="row">
        <div className="col">
          <h5>
            {investedAmount.toFixed(2)}
            {/* 29,875.<span>55</span>{" "} */}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {portfolioValue.toFixed(2)}
            {/* 31,428.<span>95</span>{" "} */}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={PLClass} >{(PL).toFixed(2)}</h5>
          <p>P&L</p>
        </div>
      </div>

      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table pb-5 pe-3">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>
          <tbody>
          {allHoldings.map((stock, index) => {
            let currValue = stock.price * stock.qty;
            let PL = currValue - stock.qty * stock.avg;
            let isProfit = currValue - stock.qty * stock.avg >= 0.0;
            let proffitClass = isProfit ? "profit" : "loss";
            let dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td className={proffitClass}>{currValue}</td>
                <td className={proffitClass}>{PL.toFixed(2)}</td>
                <td className={proffitClass}>{stock.net}</td>
                <td className={`${dayClass} fs-6`}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      <VerticalGraph data={data} />
    </>
  );
}

export default Holdings;
