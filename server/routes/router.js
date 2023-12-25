const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
const User= require("../models/CrudSchema");
var bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");


// for user registration

router.post("/register", async (req, res) => {

    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                fname, email, password, cpassword
            });

            // here password hasing

            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});




// user Login

router.post("/login", async (req, res) => {
    // console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
       const userValid = await userdb.findOne({email:email});

        if(userValid){

            const isMatch = await bcrypt.compare(password,userValid.password);

            if(!isMatch){
                res.status(422).json({ error: "invalid details"})
            }else{

                // token generate
                const token = await userValid.generateAuthtoken();

                // cookiegenerate
                res.cookie("usercookie",token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201,result})
            }
        }

    } catch (error) {
        res.status(401).json(error);
        console.log("catch block");
    }
});



// user valid
router.get("/validuser",authenticate,async(req,res)=>{
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});


// user logout

router.get("/logout",authenticate,async(req,res)=>{
    try {
        req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie",{path:"/"});

        req.rootUser.save();

        res.status(201).json({status:201})

    } catch (error) {
        res.status(401).json({status:401,error})
    }
})





//register user(use postman for testing)
router.post('/add_data/:id',async (req,res)=>{
    const{name,email,age,mobile,work,address,desc,linkedin,other,skills,experience,edu}=req.body;
    if(!name || !email || !age || !mobile || !work || !address || !desc || !linkedin || !other || !skills || !experience || !edu){
        return res.status(422).json({error:"plz fill all field properly"});
    }

    try{
     const preuser = await User.findOne({ email: email});
     console.log(preuser);
     if(preuser){
        return res.status(422).json({error:"email already exist"});
     }
     else{
        const user = new User({name,email,age,mobile,work,address,desc,linkedin,other,skills,experience,edu});
        await user.save();
  
       //res.status(201).json({message:"User registered sucessful"});
       res.status(201).json(user);
       console.log(user);
     }
        
    }catch(err){
        res.status(422).json(error)
    }
       
})


//get userdata(use postman for testing)
router.get("/getdata",async(req,res)=>{
    try{
        const userdata = await User.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }
    catch(err){
        res.status(422).json(error)
    }
})
//get individual user(use postman for testing)
router.get("/getuser/:id",async(req,res)=>{
    try{
        
        console.log(req.params);
        const {id}=req.params;
        const userindividual = await User.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    }
    catch(err){
        res.status(422).json(error)
    }
})

//update user data
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const updateuser = await User.findByIdAndUpdate(id,req.body,{
            new:true
        }); 
        console.log(updateuser);
        res.status(201).json(updateuser);
    }
    catch(error){
        res.status(422).json(error);
    }
})

//delete user data
router.delete("/deleteuser/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteuser = await User.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    }
    catch(error){
        res.status(422).json(error);
    }
})

module.exports = router;







