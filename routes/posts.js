const express = require('express')
const router = express.Router();

const Post = require("../models/Post")

// //posts 
// router.get('/', (req, res) => {
//     res.send("We are on posts")
// })

// /posts/specific
router.get('/specific', (req, res) => {
    res.send("specific post")
})

router.get('/', async (req, res) => {
    // console.log("Got request : " + req.body);
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    // console.log(req.body)             // we get undefined , why ? bcoz we need a special package to convert the req to 
    // res.send(req.body)

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost)
    }
    catch (err) {
        res.json({ message: err });
    }

});

// GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        //http://localhost:3000/posts/this-is-the-param
        // E.g -> http://localhost:3000/posts/5ee3b83f00f02867fc2fbb00
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err })
    }
})

// DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removedPost)
    }
    catch (err) {
        res.json({ message: err });
    }
})

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        )
        res.json(updatedPost)
    }
    catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;