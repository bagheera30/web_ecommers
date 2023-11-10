const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;
// membuat objek express
const app = express();

app.use(express.json());

const productControler = require("./product/product.controller");
app.use("/products", productControler);

app.listen("api berjalan di port", port);
