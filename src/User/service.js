const userModel = require('./model');

const key = "MbQeThWmZq4t6w9z$C&F)J@NcRfUjXn2";

// const encryptor = require('simple-encryptor')(key);

module.exports.createUserService = (userData) => {
  return new Promise( function myFn(resolve,reject){

    usermodel = new userModel();

    usermodel.name = userData.name;

    usermodel.email = userData.email;

    usermodel.password = userData.password;

    // let encrypted = encryptor.encrypt(usermodel.password);

    // usermodel.password = encrypted;

    usermodel.save().then( () => {

      resolve(true)
    })
    .catch((err) => {

      reject(true)
    })


  })
}


module.exports.loginUserService = (userData) => {

  return new Promise( (resolve, reject) => {

     userModel.findOne({ email : userData.email }).then(( user ) => {

      if(user != undefined && user != null){

                if(user.password == userData.password){

                  resolve({ status : true })
                }
        }
      })
    .catch((err) =>{

        reject({ status : false })
     })


     //, function result(err,res){

  //     if(err){

  //       reject({ status : false })

  //     }
  //     else{

  //       if(res != undefined && res != null){

  //         if(res == userData.password){

  //           resolve({ status : true })
  //         }
  //         else{

  //           reject({ status : false })
  //         }
  //       }
  //       else{

  //         reject({ status : false })
  //       }
  //     }
  //   })
  })
}
