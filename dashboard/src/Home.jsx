import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TopBar from "./TopBar"
import Dashboard from "./Dashboard";
import './index.css'

function Home() {

     const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");



  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onmessage= (e)=>{
      const stock = JSON.parse(e.data);
      console.log(stock);
      socket.send("Stock message received");
    }
    
}, []);




  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.get(
        "http://localhost:8080/verify",
        
        { withCredentials: true }
      );
      const { status, user,username } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${username}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/dashboard"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
     localStorage.setItem("isLoggedIn", "false");
    removeCookie("token");
    navigate("/login");
  };
    return ( <>
    
     
      <div className="home_page">
        
    <TopBar Logout={Logout} />
    <Dashboard/>
      
    
      </div>
      {/* <ToastContainer /> */}
      
    </>
    );
}

export default Home;