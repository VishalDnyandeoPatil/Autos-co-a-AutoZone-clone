const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticator = async(req,res,next)=>{
    try {
        let token=req?.headers?.authorization;
        if(!token){
            return res.status(401).json({message:"Not authorized"})
        }
        token=req.headers.authorization.split(" ")[1];
        const validToken = await jwt.verify(token,process.env.secretKey);
        if(!validToken){
            return res.status(401).json({message:"Not authorized"})
        }
        req.body.userId = validToken.userId;
        next()
    } 
    catch (error) {
        console.log("Error at authentication");    
        console.log(error);
        return res.status(500).json({message:"Something wrong, please try again",error:error.message});
    }
};

module.exports={authenticator};