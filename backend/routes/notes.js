const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Note route');
})

module.exports = router;