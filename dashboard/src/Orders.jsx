import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Orders() {
  let [allOrders,SetAllOrders]= useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allorders",{withCredentials:true}).then((res)=>{
      let arr = res.data;
      let newArr = arr.reverse();
      SetAllOrders(newArr);
    })
  });

   return (
    <div className="orders order-table mt-5">


       <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>mode</th>
            
          </tr>
          </thead>
          <tbody>
          {allOrders.map((order, index) => {
            let PL = order.qty*(order.price - order.avg);
            
            return (
              <tr key={index} >
               
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td className={`fs-6 `} style={{color:`${order.mode =="Buy" ? "blue":"red" } ` }}  >{order.mode}</td>
                
              </tr>
            );
          })}
          </tbody>
        </table>

      <div className="no-orders">

        <p>You haven't placed any orders today</p>
         <Link className="btn btn-blue" to="/Holdings" >Get Start</Link>

        
      </div>
    </div>
  );
}
export default Orders;