import { MongoClient } from "mongodb";
// import { async } from "rxjs";s

export async function connectToCluster(uri){

    // let mongoClient;

    try{

      const mongoClient = new MongoClient("mongodb+srv://gagankshirsagar2001:b9Ajowb7gtxgzWri@cluster0.grmmxa4.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });

      console.log("Connected to MongoDB Cluster");

      await mongoClient.connect();

      console.log("Successfully Conneceted to MongoDB");

      return mongoClient;
    }
    catch(error){

      console.log("Connection Fail to MongoDB",error);

      process.exit();
    }
}

//Simple Connection Function

// export async function executeCurdOperation(){

//   const uri = process.env.DB_URI;

//   let mongoClient;

//   try{

//     mongoClient = await connectToCluster(uri);
//   }
//   finally{

//     await mongoClient.close();
//   }
// }


//Create Function

export async function createStudentDocument(collection){

  const studentDocument = {

    name : 'Jay',
    birthdate : new Date(200,11,20),
    adress : { street : "xyz", City : "xyz"}
  };

  await collection.insertOne(studentDocument);
}

// Find Data

export async function findStudentByName(collection,name){

  return collection.find({name}).toArray();
}

// Update data

export async function updateStudentByName(collection,name,updatedFields){

  await collection.updateMany(
    { name },
    { $set : updatedFields }
  )
}


// Dalete data

export async function deleteStudentByName(collection,name){

  await collection.deleteMany({ name });
}

export async function executeCurdOperation(){

  const uri = process.env.DB_URI;

  let mongoClient;

  try{

    mongoClient = await connectToCluster(uri);

    const db = mongoClient.db('school');
    const collection = db.collection('students');

    console.log("Created Student");


    // for create data in cluster
    // await createStudentDocument(collection);


    // for find data from cluster
    // console.log(await findStudentByName(collection,'Ram'));


    // for update data in cluster
    // console.log("Updated Student");
    // await updateStudentByName(collection,'Ram',{ birthdate : new Date(200) });

    // console.log(await findStudentByName(collection,'Ram'));


    // for delete data from cluster
    await deleteStudentByName(collection,'Jay');
    console.log("Deleted");
    console.log(await findStudentByName(collection,'Jay'));
  }
  finally{

    await mongoClient.close();
  }
}
