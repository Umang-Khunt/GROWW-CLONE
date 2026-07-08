import WatchList from "./WatchList";
import { Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holding";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import GenrelContext from "./GeneralContext";
import { GeneralContextProvider } from "./GeneralContext";
function Dashboard() {
  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="row m-0">
          <div
            className="col-4 p-0 mb-auto pb-auto border"
            style={{ width: "32%" }}
          >
            <GeneralContextProvider>
              <WatchList />
            </GeneralContextProvider>
          </div>
          <div className="col-8 p-0 mb-auto">
            <Routes>
              <Route exact path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
