import axios from "axios"
import { useState } from "react"
export default function WithdrawFundWindow({handleWithdrawFund}){



    let WithdrawFundVal = (x)=>{

            axios.post("http://localhost:8080/withdrawfund",{
                withdrawFund:x,
          
        },{withCredentials:true});
    }
    let [withdrawFundInput,SetWithdrawFundInput] = useState(50);
    let handleWithdrawFundInput = (e)=>{
        SetWithdrawFundInput(e.target.value);
        console.log(e.target.value);
    }

    

    return (<>
    <div className="addFundWindow me-3 mt-3 " style={{height:"400px",width:"500px"}} >
        <button onClick={handleWithdrawFund} className="btn" style={{position:"relative",top:"-40%",right:"-58%"}}>Close</button>
       
        <form onSubmit={()=>WithdrawFundVal(withdrawFundInput)} >
            <input placeholder="Add fund value" className="form-control" style={{position:"relative",top:"50%",right:"33%",width:"140%"}} type="number" value={withdrawFundInput} onChange={handleWithdrawFundInput} width={"400px"}/>
            <button style={{position:"relative",top:"0%",right:"33%"}} className="btn" >Withdraw</button>
        </form>
    </div>
    </>)
}
