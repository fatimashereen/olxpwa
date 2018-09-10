const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
require('./dbConnection');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

const productController = require('./products/productController');
const userController = require('./users/userControllers');
// const productRoutes = require('./products/')
// const orderRoutes = require('./api/routes/orders');

app.use("/products", productController);
app.use("/user", userController)
app.listen(port, function (err) {
    if (err) {
        console.log('Some err occured!');
    }
    console.log((`Server Started on port : ${port}`))
})