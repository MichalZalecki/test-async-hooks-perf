import express from "express";
import clsHooked from "cls-hooked";
import { v4 as uuid } from "uuid";

const PORT = process.env.PORT ?? 3000;

const app = express();

const ns = clsHooked.createNamespace("app");
app.use((_req, _res, next) => {
  ns.run(() => {
    ns.set("requestId", uuid());
    next();
  });
  next();
});

app.get("/hello", (req, res) => {
  res.send({ hello: ns.get("requestId") });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
