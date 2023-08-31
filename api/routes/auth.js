const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Register routes
router.post('/register', async (req, res) => {
  try {
    /*********************************
     * Hashing or hidding our password
     * *******************************/
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    /*********************************
    * Hashing password
    * *******************************/

    // here we are specifying exactly what we want from the req.body parameters
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    // Saving newUser so it can be resued
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(400).json({ message: 'No such user found, check username and password' })

    const validate = await bcrypt.compare(req.body.password, user.password)
    !validate && res.status(400).json({ message: 'No such user found, check username and password' })


    /* sending everything except password to the user because that isnt a good practice
    the response comes back but without the password property */
    const { password, ...others } = user._doc;
    // if found
    if (user) {
      res.status(200).json(others)
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router