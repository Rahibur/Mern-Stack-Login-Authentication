const jwt = require("jsonwebtoken");
const userdb = require("../models/userSchema");
//const  User = require("../models/CrudSchema");
const keysecret = process.env.SECRET_KEY


const authenticate = async(req,res,next)=>{

    try {
        const token = req.headers.authorization;
        
        const verifytoken = jwt.verify(token,keysecret);
        
        const rootUser = await userdb.findOne({_id:verifytoken._id});
        //const rootUser1 = await User.findOne({_id:verifytoken._id});
        
        if(!rootUser) {throw new Error("user not found")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id
        // req.rootUser1 = rootUser1
        // req.User = rootUser1._id

        next();

    } catch (error) {
        res.status(401).json({status:401,message:"Unauthorized no token provide"})
    }
}


module.exports = authenticate