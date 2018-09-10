const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


const Product = require('./productModel');

// Post products

router.post('/addProduct', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => {
            console.log(result);
            res.status(200).send({
                result
            })
        })
        .catch(err => res.send({
            err
        }));
})

// Get all products

router.get('/', (req, res, next) => {
    // res.status(200).json({
    //     message: 'Handling Get request to /products'
    // });
    const id = req.params.productid;
    console.log(id);
    Product.find()
        .then(doc => {
            console.log("from database", doc);
            res.status(200).send(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
});

// search By Id

router.get('searchProduct/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    Product.findOne({
        "_id": id
    })
        .then(doc => {
            console.log(doc);
            res.status(200).send(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
});

// search by category
router.get('searchByCategory/', (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    Product.findOne({
        "_id": id
    })
        .then(doc => {
            console.log(doc);
            res.status(200).send(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
});




router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'updated product'
    });


})


router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'delete product'
    })

})

module.exports = router;
