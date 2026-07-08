const express = require("express");
require("dotenv").config();
const { order } = require("../dashboard/src/data/data");
const { OrderModel } = require("./model/OrderModel");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { WatchListModel } = require("./model/WatchListModel");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const {Signup} = require("./Controllers/AuthController");
const {Login} = require("./Controllers/LoginController");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const { userVerification } = require("./Middleweres/AuthMeddelwere");
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;
mongoose.connect(URL);
app.use(express.json());
app.use(cookieParser());
app.post("/",userVerification);
app.post("/signup", Signup);
app.post("/login", Login);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allHoldings = await PositionModel.find({});
  res.json(allHoldings);
});
app.get("/allWatchlist", async (req, res) => {
  let allHoldings = await WatchListModel.find({});
  res.json(allHoldings);
});
app.get("/allorders", async (req, res) => {
  let allOrders = await OrderModel.find({});

  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    mode: req.body.mode,
  });
  await newOrder.save();

  let oldHolding = await HoldingModel.findOne({ name: newOrder.name });
  console.log(oldHolding);
  if (oldHolding) {
    if (newOrder.mode == "Buy") {
      let newQty = oldHolding.qty + newOrder.qty;
      let newAvg =
        (newOrder.price * newOrder.qty + oldHolding.qty * oldHolding.avg) /
        newQty;
      console.log(newAvg, newQty);
      await HoldingModel.findByIdAndUpdate(oldHolding._id, {
        avg: newAvg,
        qty: newQty,
      });
    } else {
      if (newOrder.qty <= oldHolding.qty) {
        let newQty = oldHolding.qty - newOrder.qty;
        console.log(newQty);

        await HoldingModel.findByIdAndUpdate(oldHolding._id, { qty: newQty });
      }
    }
  } else {
    newHolding = new HoldingModel({
      name: newOrder.name,
      price: newOrder.price,
      qty: newOrder.qty,
      avg: newOrder.price,
      net: "0%",
      day: "0%",
    });
    await newHolding.save();
  }
});

app.listen(PORT, () => {
  console.log("app is listening ");
});
