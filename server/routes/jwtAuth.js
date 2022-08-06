//Router allows us to break down the routes and combine them together within the index,js

const router = require("express").Router()
const pool = require("../db")


//registering

router.post("/register", async(req, res) => {
  try {

    //1. Destructure the req.body (name, email, password)

    const {name, email, password} = req.body

    //2. Check if user exist (if exists, then throw error)

  const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
    email
  ]);

  if (user.rows.length !== 0) {
    return res.status(401).send("Email already exists");
  } 
  
  res.json(user.rows)

    //3. Bcrypt the password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = bcrypt.hash(password, salt);

    //4. Enter the user in the db

    //5. generate our jwt token

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

module.exports = router;