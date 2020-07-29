const express = require('express');
const { response } = require('express');
const cors = require('cors');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const server = express();
server.use(cors());
server.use(express.json());
server.listen(3000, function() { 
    console.log('Starting');
})

MongoClient.connect(url, function(error, db) {
    if (error) throw error;
    var data = db.db('receipts_database');
    data.createCollection('receipts', function(err, response){
        if (err) throw err;
        console.log("created database");
    })
  });

server.get('/', (request, response) => {
    response.send('Backend')
}
)

server.post('/', (request, response) => {
    var name = request.body.name;
    var order = request.body.order;
    var receipt = {"name": name, "order": order}
    MongoClient.connect(url, function(error, db) {
        if (error) throw error;
        var data = db.db('receipts_database');
        data.collection('receipts').insertOne(receipt, function(err, res) { //add item to database
            if (err) throw err;
            data.collection('receipts').find({}).toArray(function(err, result){
                response.json(result);
            })
            db.close();
        })
    
    });
})


