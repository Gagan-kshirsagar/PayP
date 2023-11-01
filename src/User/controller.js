const userService = require('./service');

const createUserController = async (req, res) => {

  try{

    const status = await userService.createUserService(req.body);

    if(status){

      res.send({ "message" : "User Created Successfully"});
    }
    else{

      res.send({ "message" : "User Not Created"});
    }
  }

  catch(err){

    console.log(err);
  }
}

const loginUserController = async( req,res ) => {

  try{

    const status = await userService.loginUserService(req.body);

    if(status){

      res.send({ "message" : "Valid User" })
    }
    else{

      res.send({ "message" : "Not a Valid User" })
    }
  }
  catch(err){

    console.log("here",err);
  }
}


//Don't forget to export module
module.exports = { createUserController,loginUserController };
