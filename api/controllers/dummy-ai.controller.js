const OpenAI = require("openai");
require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const dummyAiController = () => {
  function requestByContent(req, res) {
    const { content } = req.params;

    openai.chat.completions
      .create({
        messages: [{ role: "user", content }],
        model: "gpt-4",
      })
      .then((response) => {
        res.send(response);
      });
  }

  return {
    requestByContent,
  };
};

module.exports = dummyAiController;
