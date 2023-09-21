/*jslint es6 */
const express = require("express");
const router = express.Router();

const pool = require('../config/database');


//edit user data
router.put('/editdata', async (req, res) => {
    try {
      const { firstname, secondname, email, phone, language, role,id } = req.body;
      await pool.query(
        "UPDATE profile SET firstname = $1, secondname = $2, email = $3, phone = $4, language = $5, role = $6 WHERE id = $7",
        [firstname, secondname, email, phone, language, role,id]
      );
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error('Error updating profile data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports = router;
