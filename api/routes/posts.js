const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

/******************
CREATE POST
******************/
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);

  } catch (err) {
    res.status(500).json(err);
  }
});

/******************
UPDATE POST
******************/
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        // the new object allow us to see the post after  the update is successful
        const postUpdate = await Post.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        res.status(200).json(postUpdate)
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    } else {
      res.status(401).json({ message: 'Access denied, you can not update this post!' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

/******************
DELETE POST
******************/
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.deleteOne()
        res.status(200).json({ message: 'Post successfully deleted... ' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    } else {
      res.status(401).json({ message: 'Access denied, you can not delete this post!' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

/******************
GET POST
******************/
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post no longer exist, please check your post ID' });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/******************
GET ALL POST
******************/
router.get('/', async (req, res) => {
  const username = req.query.user;
  const catname = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.findOne({ username })
    } else if (catname) {
      // mapping through all categories
      posts = await Post.findOne({ categories: { $in: [catname] } })
    }
    else { posts = await Post.find(); }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error!!! Failed to fetch' });
  }
});
module.exports = router