//Hannah Louisse B. Unite
//CMSC 100-UV3L
//Exer 5

import express from 'express';
import { appendFileSync } from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-book', (req, res) => {
    if ((req.body.bookName != null) && (req.body.isbn != null) && (req.body.author != null) && (req.body.yearPublished != null)) {
        if ((req.body.bookName != '') && (req.body.isbn != '') && (req.body.author != '') && (req.body.yearPublished != '')) {
            try {
                appendFileSync('books.txt', req.body.bookName + ',' + req.body.isbn + ',' + req.body.author + ',' + req.body.yearPublished);
            } catch (err) {}
            res.json({success: true});
        } else {
            res.json({success: false});
        }
    } else{
        res.json({success: false});
    }
});

app.get('/find-by-isbn-author', (req, res) => {
    res.json({isbn: req.query.isbn, author: req.query.author});
});

app.get('/find-by-author', (req, res) => {
    res.json({author: req.query.author});
});

app.listen(3000, () => { console.log('Server started at port 3000')} );