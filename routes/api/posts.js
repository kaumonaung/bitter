const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validatePost } = require('../validation');

const Post = require('../../models/Post');
const User = require('../../models/User');

const paginatedResults = require('../../middleware/paginatedResults');

// @route       GET api/posts
// @desc        Get all posts
// @access      Public
router.get('/feed', paginatedResults(Post), async (req, res) => {
  try {
    res.json(res.paginatedResults);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/posts
// @desc        Get all user's posts
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/posts/:post_id
// @desc        Get post by ID
// @access      Private
router.get('/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ message: 'No post found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'No post found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route       POST api/posts
// @desc        Create post
// @access      Private
router.post('/', auth, async (req, res) => {
  // Validate input
  const { error } = validatePost(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    // Find user of the post
    const user = await User.findById({ _id: req.user.id }).select('-password');

    // Create new post object
    const newPost = new Post({
      user: req.user.id,
      text: req.body.text,
      name: user.name,
    });

    // Save new post
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       PUT api/posts/:post_id
// @desc        Edit post
// @access      Private
router.put('/:post_id', auth, async (req, res) => {
  // Validate input
  const { error } = validatePost(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    // Find post by id and update field
    const post = await Post.findByIdAndUpdate(req.params.post_id, {
      text: req.body.text,
    });

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/posts/:post_id
// @desc        Delete post
// @access      Prviate
router.delete('/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.post_id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found to be deleted' });
    }

    res.json({ message: 'Deleted post' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       PUT api/posts/like/:post_id
// @desc        Like post
// @access      Private
router.put('/like/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    // Check if post has been already liked by the user
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ message: 'Post already liked' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       PUT api/posts/unlike/:post_id
// @desc        Dislike / Unlike post
// @access      Private
router.put('/unlike/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    // Check if post has been already liked by the user
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ message: 'Post cannot be unliked' });
    }

    // Get remove index from post.likes
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/posts/comment/:post_id
// @desc        Post comment
// @access      Private
router.post('/comment/:post_id', auth, async (req, res) => {
  // Validate input
  const { error } = validatePost(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const user = await User.findById(req.user.id).select('-password');
    const post = await Post.findById(req.params.post_id);

    const newComment = {
      user: req.user.id,
      name: user.name,
      text: req.body.text,
    };

    post.comments.unshift(newComment);
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/posts/comment/:post_id/:comment_id
// @desc        Delete comment
// @access      Private
router.delete('/comment/:post_id/:comment_id', auth, async (req, res) => {
  try {
    // Find post
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Find comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // Check if comment exists
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if user is authorized for comment
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = post.comments
      .filter((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
