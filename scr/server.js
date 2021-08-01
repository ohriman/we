import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  return res.end();
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});

// #3.5 부터
