const mongoose = require("mongoose");
const joi = require('joi');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log('Listening on port 3000...'));

mongoose
    .connect("mongodb://127.0.0.1:27017/petShop", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB!"))
    .catch(error => console.error("Could not connect to MongoDB... ", error));

const categories = new mongoose.Schema({
    _id : Number,
    name : String,
    icon : String,
    altTag : String
})

const productSchema = new mongoose.Schema({
    _id : Number,
    name : String,
    image : String,
    description : String,
    longDescription : String,
    price : Number,
    amount : Number,
    rating : Number,
    parameters : Object,
    categories : Array,
    mainCategory : String,
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

const postSchema = new mongoose.Schema({
    _id : Number,
    title: String,
    content: String,
    url: String,
    image : String,
    dateAdded: {
        type: Date,
        default: Date.now
    }
})

const benefitSchema = new mongoose.Schema({
    _id : Number,
    title : String,
    image : String,
})

const Category = mongoose.model("categories", categories);
const Product = mongoose.model("products", productSchema);
const Post = mongoose.model("posts", postSchema);
const Benefit = mongoose.model("benefits", benefitSchema);


app.get('/api/categories', (req, res) => {
    Category.find().then(categories => {res.json(categories)})
})

app.get('/api/products', (req, res) => {
    Product.find().then(products => {res.json(products)})
})

app.get('/api/products/:limit', (req, res) => {
    Product.find().limit(req.params.limit).then(products => {res.json(products)})
})

app.get('/api/products/date/:limit', (req, res) => {
    Product.find().sort({date: 1}).limit(req.params.limit).then(products => {res.json(products)})
})

app.get('/api/product/:id', (req, res) => {
    Product.findById(req.params.id, (error, result) => {
        if(error || !result){
            res.status(404).send({message: 'Post not found'})
        } else {
            res.json(result)
        }
    })
})

app.get('/api/posts/:id', (req, res) => {
    Post.findById(req.params.id, (error, result) => {
        if(error || !result){
            res.status(404).send({message: 'Post not found'})
        } else {
            res.json(result)
        }
    })
})

app.get('/api/benefits', (req, res) => {
    Benefit.find().then(categories => {res.json(categories)})
})