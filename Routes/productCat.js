import express from "express";
import mysql, { createPool } from "mysql2";

const productCat = express.Router();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "estore",
  password: "Shetty@05",
  multipleStatements: true,
  port: 3306,
});

productCat.get("/product", (req, res) => {
  // pool.getConnection((err, connection) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else {
  pool.query("SELECT * from categories", (err, cat) => {
    if (err) {
      res.status(500).send(err);
    } else res.status(200).send(cat);
  });
});

productCat.get("/getProduct", (req, res) => {
  pool.query("SELECT * from product", (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else res.status(200).send(rows);
  });
});

export default productCat;
