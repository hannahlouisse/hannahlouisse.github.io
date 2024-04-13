//Hannah Louisse B. Unite
//CMSC 100-UV3L
//Exer 7

const express = require('express');
const app = express();

app.use(express.static('static_files'));
app.listen(3000, () => {
    console.log('Server started at port 3000');
})