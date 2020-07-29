const express = require('express');
const { response } = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
server.listen(3000, function() { 
    console.log('Starting');
})

server.get('/', (request, response) => {
    response.send('Homepage')
}
)

server.post('/', (request, response) => {
    var name = request.body.name;
    var order = request.body.order;
    var receipt = {"name": name, "order": order}
    response.json(receipt);
})
