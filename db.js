var mongoClient = require("mongodb").MongoClient;
var objectId = require('mongodb').ObjectID;
mongoClient.connect("mongodb://localhost:27017")
   .then(conn => global.conn = conn.db("senac"))
   .catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("aluno").find({}).toArray(callback);
}

function deleteAlunos(id, callback){
    global.conn.collection("aluno").remove({ _id: objectId(id) }, callback);
}

module.exports = { findAll, deleteAlunos }