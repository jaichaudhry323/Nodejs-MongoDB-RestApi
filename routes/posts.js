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
    // console.log("Got request : "+req.body);
    try {
        console.log(1)
        // res.send("nn")
        const posts = await Post.find();
        console.log(2)
        res.json(posts);
    }
    catch (err) {
        res.json(err)
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


module.exports = router;