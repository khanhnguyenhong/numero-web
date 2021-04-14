const chartNumberDB = [
  {
    number: 1,
    descriptions: [
      { type: "GIỚI THIỆU", content: "Số 1.0" },
      { type: "GIỚI THIỆU", content: "Số 1.1" },
    ],
  },
  {
    number: 2,
    descriptions: [
      { type: "GIỚI THIỆU", content: "Số 2.0" },
      { type: "GIỚI THIỆU", content: "Số 2.1" },
    ],
  },
];

function chartNumberController() {
  function getChartNumber(req, res) {
    const { number } = req.params;
    res.send(chartNumberDB.filter((n) => n.number == number)[0]);
  }

  return {
    getChartNumber
  };
}

module.exports = chartNumberController;
