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
const { Signup } = require("./Controllers/AuthController");
const { Login } = require("./Controllers/LoginController");
const cookieParser = require("cookie-parser");
const WebSocket = require("ws");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const { userVerification, checkUser } = require("./Middleweres/AuthMeddelwere");
const { UserModel } = require("./model/UserModel");
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;
mongoose.connect(URL);
app.use(express.json());
app.use(cookieParser());






const wss = new WebSocket.Server({
    port: 8080,
});

wss.on("connection", (socket) => {
    console.log("Client Connected");

    socket.send(
       JSON.stringify({
        symbol: "TCS",
        ltp: 3521.25,
        change: "+1.23%"
    })
    );
    socket.on("message",(message)=>{
     
      console.log(message.toString());
    });

});













app.post("/", userVerification);
app.post("/signup", Signup);
app.post("/login", Login);

app.get("/verify", checkUser, async (req, res) => {
  let User = await UserModel.findOne({ _id: req.userId });
  res.json({
    status: true,
    user: req.userId,
    username: User.username,
  });
});

app.get("/allHoldings", userVerification, checkUser, async (req, res) => {
  let allHoldings = await HoldingModel.find({ owner: req.userId });
  res.json(allHoldings);
});

app.get("/username", checkUser, async (req, res) => {
  let User = await UserModel.findOne({ _id: req.userId });
  res.json(User.username);
});

app.get("/allPositions", async (req, res) => {
  let allHoldings = await PositionModel.find({});
  res.json(allHoldings);
});
app.get("/allWatchlist", async (req, res) => {
  let allHoldings = await WatchListModel.find({});
  res.json(allHoldings);
});
app.get("/allorders", checkUser, async (req, res) => {
  let allOrders = await OrderModel.find({ owner: req.userId });
  res.json(allOrders);
});

app.post("/newOrder", checkUser, async (req, res) => {
  let User = await UserModel.findOne({ _id: req.userId });
  let oldHolding = await HoldingModel.findOne({
    name: req.body.name,
    owner: req.userId,
  });

  if (req.body.mode == "Buy") {
    if (User.fund > req.body.qty * req.body.price) {
      let newOrder = new OrderModel({
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        mode: req.body.mode,
        owner: req.userId,
      });
      await newOrder.save();
    }
  } else {
    if (oldHolding.qty >= req.body.qty) {
      let newOrder = new OrderModel({
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        mode: req.body.mode,
        owner: req.userId,
      });
      await newOrder.save();
    }
  }

  if (oldHolding) {
    if (req.body.mode == "Buy") {
      if (User.fund > req.body.qty * req.body.price) {
        let newQty = oldHolding.qty + req.body.qty;
        let newAvg =
          (req.body.price * req.body.qty + oldHolding.qty * oldHolding.avg) /
          newQty;

        console.log(newAvg, newQty);
        await HoldingModel.findByIdAndUpdate(oldHolding._id, {
          avg: newAvg,
          qty: newQty,
        });
        User.fund = User.fund - req.body.qty * req.body.price;
        await User.save();
        console.log(User.fund);
      }
    } else {
      if (req.body.mode == "Sell" && req.body.qty <= oldHolding.qty) {
        let newQty = oldHolding.qty - req.body.qty;
        console.log(newQty);

        await HoldingModel.findByIdAndUpdate(oldHolding._id, { qty: newQty });
        console.log("holding sell updated");
        User.fund = User.fund + req.body.qty * req.body.price;
        await User.save();
      }
    }
  } else {
    if (req.body.mode == "Buy") {
      if (User.fund >= req.body.qty * req.body.price) {
        let newHolding = new HoldingModel({
          name: req.body.name,
          price: req.body.price,
          qty: req.body.qty,
          avg: req.body.price,
          net: "0%",
          day: "0%",
          owner: req.userId,
        });
        await newHolding.save();
        User.fund -= req.body.qty * req.body.price;
        await User.save();
        console.log(User.fund, "at new order");
      }
    }
  }

  res.json({ success: true, message: "Order saved" });
});

app.get("/funds", checkUser, async (req, res) => {
  let oldHolding = await HoldingModel.find({
    owner: req.userId,
  });
  let x = 0;
  oldHolding.forEach((holding) => {
    x = x + holding.qty * holding.avg;
  });

  let User = await UserModel.findOne({ _id: req.userId });

  let Funds = {
    fund: User.fund,
    usedMargin: x,
  };
  res.json(Funds);
});

app.post("/addfund", checkUser, async (req, res) => {
  if (req.body.addFund > 0) {
    let User = await UserModel.findById(req.userId);
    console.log(User.fund);

    User.fund = User.fund + req.body.addFund;
    console.log(User.fund);
    await User.save();
  }
});

app.post("/withdrawfund", checkUser, async (req, res) => {
  console.log("Hii");
  let User = await UserModel.findById(req.userId);
  console.log(User.fund);

  if (req.body.withdrawFund < User.fund) {
    User.fund -= req.body.withdrawFund;
    await User.save();

    console.log(User.fund);
  }
});

app.listen(PORT, () => {
  console.log("app is listening ");
});
