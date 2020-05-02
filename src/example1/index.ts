import express from "express";
import { v4 as uuid } from "uuid";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use((req, _res, next) => {
  req.context = { id: uuid() };
  next();
});

app.get("/hello", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
