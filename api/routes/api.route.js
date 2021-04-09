const express = require("express");
const rulingNumberController = require("../controllers/ruling-number.controller");

const apiRouter = express.Router();
const { getRulingNumber, getRulingNumbers } = rulingNumberController();

apiRouter.route("/ruling-numbers").get(getRulingNumbers);
apiRouter.route("/ruling-number/:number").get(getRulingNumber);

module.exports = apiRouter;
