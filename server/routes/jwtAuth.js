//Router allows us to break down the routes and combine them together within the index,js

const router = require("express").Router()
const pool = require("../db")
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator")

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

    const newUsers = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password_hash) VALUES ($1, $2, $3)  RETURNING *" [name, email, bcryptPassword] 
    );

      res.json(newUser)
    //5. generate our jwt token

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({token})

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

//login route

router.post("/login", async (req, res) => {
  try {

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;