import axios from "axios"
import { useState } from "react"

export default function AddFundWindow({handleAddFund}){
  
    let AddFundVal = (num)=>{

            axios.post("http://localhost:8080/addfund",{
                addFund:num,
          
        },{withCredentials:true});
    }
    let [addFundInput,SetAddFundInput] = useState(50);
    let handleAddFundInput = (e)=>{
        let num = e.target.value;
        SetAddFundInput(Number(e.target.value));
    }

    

    return (<>
    <div className="addFundWindow  " style={{height:"400px",width:"500px"}} >
         <div className="row mb-5" style={{position:"relative",top:"-40%",right:"-58%"}}><button onClick={handleAddFund} className=" btn" >Close</button></div>
         <div className="row">
        <form onSubmit={()=>AddFundVal(addFundInput)}>
           
            <input placeholder="Add fund value" style={{position:"relative",top:"50%",right:"33%",width:"140%"}} className="form-control " type="number" value={addFundInput} onChange={handleAddFundInput} width={"400px"}/>
            <button className=" btn" style={{position:"relative",top:"0%",right:"33%"}}>Add fund</button>
        </form>
        </div>
       
    </div>
    </>)
}