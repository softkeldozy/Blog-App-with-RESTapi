const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const Post = require('../models/Post');

/******************
UPDAATING USER
******************/
router.put('/:id', async (req, res) => {
  if (req.body.userid === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }
    try {
      // the {new:true} object sends the updated user back to the db ofr the update to sync
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      res.status(200).json(updatedUser);
      res.status(200).json({ message: 'Account updated successfully' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  else { res.status(401).json({ message: 'Access denied. You can only edit your own account' }) }

});

/******************
DELETING USER
******************/
router.delete('/:id', async (req, res) => {
  if (req.body.userid === req.params.id) {

    /* ************************************************************
    FINDING ALL POSTS OF THE USER AND DELETING THEM AS WELL.
    NOT JUST THE ACCOUNT BUT EVERY ARTICLE RELATED TO IT 
    *************************************************************/
    try {
      try {
        const user = await User.findById(req.params.id)
        if (user) {
          await Post.deleteMany({ username: user.username })
          await User.findByIdAndDelete(req.params.id)
          res.status(200).json({ message: 'Account deleted successfully...' })
        }
      }
      catch (error) {
        res.status(404).json({ message: 'User not found!' })
      }
    }
    catch (err) {
      res.status(500).json(err)
    }
  }
  else { res.status(401).json({ message: 'Access denied. You can only delete your own account' }) }

})

/******************
GET USER
******************/
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {

  }
})
module.exports = router