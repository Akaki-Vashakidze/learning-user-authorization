const express = require('express')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akak1:eKr2CmPEpAn4Cbyvc@cluster0.fcpniir.mongodb.net/schema1?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
}, () => { 
    console.log('connected to database myDb ;)') 
})


router.get('/',(req,res) => {
    res.send('From Api route')
})

router.post('/register',(req,res) => {
    let userData = req.body;
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error) {
            console.log('errroooooorrrr' + error)
        } else {
            res.status(200).send(registeredUser)
        }
    });
})

module.exports = router