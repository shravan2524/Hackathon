const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const path = require('path');

const port = process.env.PORT || 5000;
var wishlist = require("./Models/Wishlist");

mongoose.connect('mongodb+srv://shravan:ravilata@cluster0.yyer7.mongodb.net/Hackathon?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Database connected');
});

app.post("/api/addtowishlist", (req, res) => {
    console.log(req.body.email, "hello");
    console.log(req.body.item, "fhsgdh");
    useremail = req.body.email;
    const wishs = { 
        image : req.body.item.product_image,
        name : req.body.item.product_title,
        price : req.body.item.product_price,
        currency : req.body.item.product_currency,
        description : req.body.item.product_description,
        _id : req.body.item.product_id,

    };
    let newwishlist = new wishlist({
        email : useremail,
        wish : wishs,
        cart : [],
    })
    let query = { email: useremail };
    wishlist.findOne(query)
    .then(e => {
        if(e){
           console.log("User already Registered");
           wishlist.find(query)
           .then((e) => {
                tempwishlist = e[0].wish;
                tempwishlist.push(wishs);
                console.log(tempwishlist);
                wishlist.updateOne(query, {wish : tempwishlist})
                .then((e)=>{
                    res.send("success");
                })  
                .catch((err)=>console.log(err));
           })
           .catch((err) => console.log(err));
        }
        else{
        console.log(newwishlist);  
        newwishlist.save()
            .then((e) => {
                res.send("success");
            })
            .catch(err => console.log(err));
            }
    })
    .catch(err => console.log(err)); 

})

app.post("/api/getwishlist", (req, res) => {
    // const {email} = req.body.email;
    console.log(req.body.email, "hii");

    let query = { email: req.body.email };
    let temp = [];
    wishlist.find(query)
    .then((e) => {
        console.log(e);
        res.send(e);
    })
    .catch((err) => console.log(err));
})
app.post("/api/removefromwishlist", (req, res) => {
    console.log(req.body , "hhd");
    let query = { email: req.body.email };
    let temp = [];
    wishlist.find(query)
    .then((e)=>{
        console.log(e[0].wish);
        for(var i=0;i<e[0].wish.length;i++){
            if(e[0].wish[i]._id != (req.body.item._id)){
                temp.push(e[0].wish[i]);
            }
        }
        console.log(temp);
        wishlist.updateOne(query, {wish : temp})
                .then((e)=>{
                    console.log("removed");
                    res.send(temp);
                })  
                .catch((err)=>console.log(err));
    })
    .catch((err) => console.log(err));
})

app.post("/api/movetocart", (req, res) => {
    console.log(req.body , "hhd");
    let query = { email: req.body.email };
    let temp = [];
    let moveingitem = req.body.item;
    wishlist.find(query)
    .then((e)=>{
        console.log(e[0].wish);
        for(var i=0;i<e[0].wish.length;i++){
            if(e[0].wish[i]._id != (req.body.item._id)){
                temp.push(e[0].wish[i]);
            }
        }
        console.log(temp);
        wishlist.updateOne(query, {wish : temp})
                .then((e)=>{
                    console.log("removed");
                    // res.send(temp);
                    let tempmove = [];
                    wishlist.find(query)
                    .then((e) => {
                        tempmove = e[0].cart;
                        tempmove.push(moveingitem);
                         console.log(tempmove, "tempmove");
                         wishlist.updateOne(query, {cart : tempmove})
                         .then((e)=>{
                             console.log("Moved Succesfully");
                             res.send(temp);
                         })  
                         .catch((err)=>console.log(err));
                    })
                    .catch((err) => console.log(err));                   
                })  
                .catch((err)=>console.log(err));
    })
    .catch((err) => console.log(err));
})


app.post("/api/addtocart", (req, res) => {
    console.log(req.body , "hhd");
    let query = { email: req.body.email };
    const cart = { 
        image : req.body.item.product_image,
        name : req.body.item.product_title,
        price : req.body.item.product_price,
        currency : req.body.item.product_currency,
        description : req.body.item.product_description,
        _id : req.body.item.product_id,

    };
    let newwishlist = new wishlist({
        email : req.body.email,
        wish : [],
        cart : cart,
    })
    let tempcart = [];
    let moveingitem = req.body.item;
    console.log(moveingitem, "afjskflgad");

    wishlist.findOne(query)
    .then(e => {
        if(e){
           console.log("User already Registered");
           wishlist.find(query)
           .then((e) => {
            tempcart = e[0].cart;
            tempcart.push(cart);
                console.log(tempcart);
                wishlist.updateOne(query, {cart : tempcart})
                .then((e)=>{
                    res.send("success");
                })  
                .catch((err)=>console.log(err));
           })
           .catch((err) => console.log(err));
        }
        else{
        console.log(newwishlist);  
        newwishlist.save()
            .then((e) => {
                res.send("success");
            })
            .catch(err => console.log(err));
            }
    })
    .catch(err => console.log(err)); 

})
app.listen(port, () => console.log('server running..'));