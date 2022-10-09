const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Update User

router.put("/:id", async(req,res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            }) 
            res.status(200).json("Account has been updated");
        } catch (error) {
            return res.status(500).json(error)
        }
    }else{
        return res.status(403).json("You can update only your account!!!")
    }
});
// Delete User

router.delete("/:id", async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been Deleted");
        } catch (error) {
            return res.status(500).json(error)
        }

    }else{
        return res.status(403).json("You can delete only your account!!!")
    }
});

// Get a User

router.get("/:id", async(req, res)=>{
    try {
        const user =await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error).send("error yna h")
    }
})

module.exports =router