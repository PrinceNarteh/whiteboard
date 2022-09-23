import express, { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
