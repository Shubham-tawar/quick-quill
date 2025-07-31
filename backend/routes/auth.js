const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const { body,query, validationResult } = require('express-validator');
const { use } = require('react');

// Route 1: Create a user using POST "/api/auth/createuser". No login required
router.post('/createuser',[ // this is the validation middleware using express-validator
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
    ],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({ error: "User with this email already exists" });
        }
        user = await User.create({
            name:req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json(user);
    }catch(error){
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
    
    
    
})

module.exports = router;