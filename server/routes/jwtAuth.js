//Router allows us to break down the routes and combine them together within the index,js

const router = require("express").Router()


//registering

router.post("/", async(req, res) => {
  try {

    //1. Destructure the req.body (name, email, password)

    //2. Check if user exist (if exists, then throw error)

    //3. Bcrypt the password

    //4. Enter the user in the db

    //5. generate our jwt token
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

module.exports = router;