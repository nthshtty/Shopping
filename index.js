import express from "express";
import product from "./Routes/productCat.js";
import cors from "cors";

const app = express();

app.use(cors());

const port = 5001;

app.use("/", product);

app.listen(port, () => {
  console.log("Server is listening");
});
