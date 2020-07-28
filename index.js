const express = require('express');
const { response } = require('express');

const server = express();
server.listen(3000, function() { 
    console.log('Starting');
})

server.get('/', (request, response) => {
    
    response.send('Homepage')
}
)
