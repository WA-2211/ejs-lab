const express = require('express')
const app = express()
const restaurants = require('./data')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('homepage.ejs')
})

app.get('/restaurants', (req,res)=>{
    res.render('all-restaurants.ejs',{restaurants: restaurants})
})

app.get('/restaurants/:id', (req,res)=>{
    console.log(req.params.id)
    const foundrestaurant = restaurants.find((oneRestaurant)=>{
        return oneRestaurant.id === Number(req.params.id)
    })
//console.log(findrestaurant)

    res.render('restaurants-details.ejs',{foundrestaurant})
})

app.listen(3000, ()=>{
    console.log('App is Running')
})