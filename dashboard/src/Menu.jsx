import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Menu({Logout}) {
     let [menuSelect,SetMenuSelect] = useState(0);
let [isProfileOpen,SetIsProfileOpen] = useState(false);

let handleMenuClick = (idx)=>{
  SetMenuSelect(idx);
}

let [username,setUsername] = useState("");

 useEffect(()=>{
    axios.get("http://localhost:8080/username",{withCredentials:true}).then((res)=>{
      setUsername(res.data);
    })
  });

const initials = username
  ?.trim()
  .split(" ")
  .map(word => word[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();



let handleProfileOpen = ()=>{
  SetIsProfileOpen(!isProfileOpen);
  console.log(isProfileOpen);
}

let menuClass = "menu";
let activeMenuClass = "menu selected";
  return (
    <div className="menu-container d-flex" style={{alignItems:"center"}} >
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul className="m-0 pt-3" >
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/" onClick={()=>handleMenuClick(0)}  >
            <p className={menuSelect === 0 ? activeMenuClass:menuClass}  >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/orders" onClick={()=>handleMenuClick(1)} >
            <p className={menuSelect === 1 ? activeMenuClass:menuClass}  >Orders</p>
            </Link>
            
          </li>
          <li>        
            <Link style={{textDecoration:"none"}} to="/dashboard/holdings" onClick={()=>handleMenuClick(2)} >
            <p className={menuSelect === 2 ? activeMenuClass:menuClass}  >Holdings</p>
            </Link>    
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/positions" onClick={()=>handleMenuClick(3)} >
            <p className={menuSelect === 3 ? activeMenuClass:menuClass}  >Positions</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/funds" onClick={()=>handleMenuClick(4)} >
            <p className={menuSelect === 4 ? activeMenuClass:menuClass}  >Funds</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/apps" onClick={()=>handleMenuClick(5)} >
            <p className={menuSelect === 5 ? activeMenuClass:menuClass}  >Apps</p>
            </Link>
            
          </li>
          <li><button onClick={Logout}>logout</button></li>
        </ul>
        <hr />
        <div className="profile " >
          <div className="avatar">{initials}</div>
          <p className="username m-0" onClick={handleProfileOpen} >{username}</p>
        </div>
      </div>
    </div>

  );
}

export default Menu;