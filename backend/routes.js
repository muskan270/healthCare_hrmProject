const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../backend/Models/Post.js');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (err) {
        console.error('Internal Error:', err);
        res.status(400).send('Internal Error:' + err);
    }
});

// Get post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).send('Post not found');
        } else {
            res.send(post);
        }
    } catch (err) {
        console.error('Internal Error:', err);
        res.status(400).send('Internal Error:' + err);
    }
});

// Create a new post
router.post('/', async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            username: req.body.username
        });
        const savedPost = await post.save();
        res.send(savedPost);
    } catch (err) {
        console.error('Internal Error:', err);
        res.status(400).send('Internal Error:' + err);
    }
});

// Update post by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedPost);
    } catch (err) {
        console.error('Internal Error:', err);
        res.status(400).send('Internal Error:' + err);
    }
});

// Delete post by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.send(deletedPost);
    } catch (err) {
        console.error('Internal Error:', err);
        res.status(400).send('Internal Error:' + err);
    }
});

module.exports = router;
