const express = require('express');
const { listenerCount } = require('../modal/Posts');
const Posts = require('../modal/Posts');
const router = express.Router();

// to get all the post 
router.get("/" , (req ,res) => {
Posts.find()
.then((resp) => res.status(200).json(resp))
.catch((err) => res.status(400).json("Request Failed"))
});

//To Create a new post
router.post("/" , (req ,res) => {
    const {title , description } = req.body;
    const post = new Posts ({
        title ,
        description,
    });
  post 
  .save()
  .then((resp) => res.status(201).json(resp))
  .catch((err) => res.status(400).json("Request Failed"))

});


//to delete a specific post 

router.delete("/:id" ,(req ,res) => {
Posts.remove({_id : req.params.id})
 .then((resp) => res.status(200).json(resp))
 .catch((err) => res.status(400).json("REquest Failed"))

});

//to delete multiple post 
router.post("/delete" , (req , res) => {
Posts.deleteMany({_id: list , list :{ $in : req.body.list}})
.then((resp)=> res.status(200).json(resp))
.catch((err)=> res.status(400).json("Request Failed "))
})


//to get a specific post 
router.get("/:id" , (req , res) => {
    Posts.findById(req.params.id)
    .then((resp)=> res.status(200).json(resp))
    .catch((err)=> res.status(400).json("Request Failed "))
    })


 //to update a specific post 
router.patch("/:id" , (req , res) => {
    Posts.updateOne({_id:req.params.id } , {$set : req.body})
    .then((resp)=> res.status(200).json(resp))
    .catch((err)=> res.status(400).json("Request Failed "))
    })


    module.exports = router;