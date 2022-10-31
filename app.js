const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

const data = {
  slackUsername: "zambogo7",
  backend: true,
  age: 23,
  bio: "I am a software engineer currently living in Machakos, Kenya. My interests range from web development to mobile development. I am also interested in soccer, reading, and technology. I'm a full-stack engineer with a strong desire for pushing the boundaries, learning, and a healthy disregard for the impossible.",
};

app.get("/", (req, res) => {
  res.send(JSON.stringify(data));
});
