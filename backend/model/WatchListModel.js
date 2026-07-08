const {WatchListSchema} = require("../schemas/WatchListSchema");
const {model} = require("mongoose");

const WatchListModel =  model("watchlist",WatchListSchema);

module.exports = {WatchListModel};