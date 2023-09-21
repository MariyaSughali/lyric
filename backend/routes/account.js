/*jslint es6 */
const express = require("express");
//import { Express } from "express";

const router = express.Router();

const pool = require('../config/database');

//get user data from db
router.get('/account', async(req, res) => {
  try {
    const result = await pool.query("SELECT * FROM profile");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({message: "Internal server error"});
  }
});

module.exports = router;
