const insertData = async (client, data) => {
  try {
    const db = client.db(`AmanTest`);
    const x = await db.collection(`AmanTest1`).insertOne({ name: data });
    let resp ;
    if(x.insertedCount>0){
      
      resp=  "Record Successfully inserted";
    }

    console.log("done");
    return resp;
  } catch (error) {
    console.log(error);
  }
};

const createConnection = async () => {
  var { MongoClient } = require("mongodb");

  const connectUrl = `mongodb+srv://Aman:Aman123456@aman.cdekv.mongodb.net/AmanTest?retryWrites=true&w=majority`;

  const client = new MongoClient(connectUrl);
  try {
    await client.connect();
  } catch (error) {
    console.log("error", error);
  }
  return client;
};

module.exports = { createConnection, insertData };
