import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddFundWindow from "./AddFundWindow";
import WithdrawFundWindow from "./WithdrawFundWindow";

function Funds() {
  let [availableMargin,SetAvailableMargin] = useState(0);
  let [usedMargin,SetUsedMargin] = useState(0);
  useEffect(()=>{
    axios.get("http://localhost:8080/funds",{withCredentials:true}).then((res)=>{
      
      SetAvailableMargin(res.data.fund);
      SetUsedMargin(res.data.usedMargin);
    })
  });

  let [isAddFundOpen,SetIsAddFundOpen] = useState(false);
  let [isWithdrawOpen,SetIsWithdrawOpen] = useState(false);

  const handleAddFund = ()=>{
    isAddFundOpen ? SetIsAddFundOpen(false) : SetIsAddFundOpen(true);
    }
     const handleWithdrawFund = ()=>{
    isWithdrawOpen ? SetIsWithdrawOpen(false) : SetIsWithdrawOpen(true);
    }

    return ( <> <div className="funds">
        {!isAddFundOpen &&<div> <p>Instant, zero-cost fund transfers with UPI </p> 
         <Link className="btn btn-green" onClick={handleAddFund} >Add funds</Link>
       
        <Link className="btn btn-blue" onClick={handleWithdrawFund} >Withdraw</Link></div>}
         {isAddFundOpen && <AddFundWindow handleAddFund={handleAddFund} />}
          {isWithdrawOpen && <WithdrawFundWindow handleWithdrawFund={handleWithdrawFund} />}
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{availableMargin}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{availableMargin}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </> );
}

export default Funds;