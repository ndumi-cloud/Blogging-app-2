const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt')
const Post = require('../models/post')

// UPDATE
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body,}, {new:true})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
} else {
    res.status(401).json('You can update only your account!')
}
})

// DELETE
router.delete('/:id', async (req, res) => {
    const { userId } = req.body;

    if (userId !== req.params.id) {
        return res.status(401).json('You can delete only your account!');
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).json('User not found');
        }

        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User and associated posts have been deleted');
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
});

// GET USER
 router.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch (err){
        res.status(500).json(err)
    }
 })
module.exports = router
  