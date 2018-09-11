//express router 
const express= require('express');
const router=express.Router();

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc Get all items
//@access Public
router.get('/', (req,res) => {// uses / since router is already mapped to file in server
	Item.find()
	.sort({date: -1})//sort by date (1) asc (-1) desc
	.then(items => res.json(items))//stores results in items array
});



module.exports=router;