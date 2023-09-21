const Router = require("express");
const router = Router();
const hash = require("bcrypt");

const pool = require("../config/database");
const validatePassword = require("../validation/passwordValidation");

router.put('/changepassword', async function(req, res){
  const { id, oldPassword, newPassword } = req.body;

  const result = await validatePassword(id, oldPassword);

  if (result.error) {
    return res.status(result.status).json({ message: result.error });
  }
  const saltRounds = 10;
    const hashedNewPassword = await hash(newPassword, saltRounds);
    await pool.query('UPDATE profile SET password = $1 WHERE id = $2', [hashedNewPassword, id]);

  res.status(result.status).json({ message: result.message });
});

export default router;
