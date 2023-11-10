import { Request, Response } from "express";
const express = require("express");

const Router = express.Router();

Router.get("/", (req: Request, res: Response) => {
  res.send("berbayar");
});
module.exports = Router;
