import express from "express";
import path from "path";

const app = express();
const PORT = 4000;
const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHtml = (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
};

app.listen(PORT, handleListening);
app.use(express.static(__dirname + "/public"));
app.get("/", handleHtml);
