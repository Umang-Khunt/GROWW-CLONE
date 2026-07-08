import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Positions() {

  let [allPositions,SetAllPositions] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allPositions").then((res)=>{
      SetAllPositions(res.data);
    })
  },[])

  return (
    <>
      {" "}
      <h3 className="title pt-3">Positions ({allPositions.length})</h3>
      <div className="order-table ">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
            <th>Day Chg.</th>
          </tr>
          {allPositions.map((position, index) => {
            let PL = position.qty*(position.price - position.avg);
            let isProfit = PL >= 0.0 ?"profit":"loss";
            let dayClass = position.isLoss?"loss":"profit";
            return (
              <tr key={index} >
                <td>{position.product}</td>
                <td>{position.name}</td>
                <td>{position.qty}</td>
                <td>{position.avg}</td>
                <td>{position.price}</td>
                <td className={isProfit} >{PL.toFixed(2)}</td>
                <td className={isProfit}>{position.net}</td>
                <td className={`${dayClass} fs-6`} >{position.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Positions;
