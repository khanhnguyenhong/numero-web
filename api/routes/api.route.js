const express = require("express");
const rulingNumberController = require("../controllers/ruling-number.controller");
const chartNumberController = require("../controllers/chart-number.controller");
const dummyAi = require("../controllers/dummy-ai.controller");

const apiRouter = express.Router();
const { getRulingNumber, getRulingNumbers } = rulingNumberController();
const { getChartNumber } = chartNumberController();
const { requestByContent } = dummyAi();

apiRouter.route("/ruling-numbers").get(getRulingNumbers);
apiRouter.route("/ruling-number/:number").get(getRulingNumber);
apiRouter.route("/chart-number/:number").get(getChartNumber);
apiRouter.route("/dummy-ai/:content").get(requestByContent);

module.exports = apiRouter;
