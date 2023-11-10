import express, { Request, Response } from "express";

import dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

// TODO: Routing aplikasi akan kita tulis di sini

// handle 404 error

app.get("/api", (req: Request, res: Response) => {
  res.send("berhasil");
});
const productcontroller = require("./pruduk/produk.controler");
app.use("/products", productcontroller);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:` + port)
);
