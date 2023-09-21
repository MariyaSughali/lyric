/*jslint es6 */
const bcrypt = require('bcrypt');
const pool = require('../config/database');

async function validatePassword(id, oldPassword) {
  try {
    const userResult = await pool.query('SELECT password FROM profile WHERE id = $1', [id]);
    const user = userResult.rows[0];

    if (!user) {
      return {error: 'User not found', status: 404};
    }

    const passwordMatch = bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return {error: 'Invalid old password', status: 401};
    }

    return {message: 'Password updated successfully', status: 200};
  } catch (error) {
    return {error: 'Internal server error', status: 500};
  }
}

module.exports = validatePassword;
