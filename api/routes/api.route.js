const express = require("express");
const rulingNumberController = require("../controllers/ruling-number.controller");
const chartNumberController = require("../controllers/chart-number.controller");

const apiRouter = express.Router();
const { getRulingNumber, getRulingNumbers } = rulingNumberController();
const { getChartNumber } = chartNumberController();

apiRouter.route("/ruling-numbers").get(getRulingNumbers);
apiRouter.route("/ruling-number/:number").get(getRulingNumber);
apiRouter.route("/chart-number/:number").get(getChartNumber);

module.exports = apiRouter;
