const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
app.use(express.json());
const port = 1000;

//available routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});

app.listen(3000);
