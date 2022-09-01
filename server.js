const express = require('express')
const methodOverride = require('method-override');
require('./config/db.connection')
const houseController = require('./controllers/house_controller')
const realtorController = require('./controllers/realtor_controller')
const db = require("./models");
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const PORT = 4000
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(methodOverride('_method'));

app.use('/house', houseController)
app.use('/realtor', realtorController)

app.get('/', async (req, res) => {
    const house = await db.House.find()
    const houseImage = await db.House.find(house.imageOne)
    const context = {house: house, houseImage: houseImage}
    res.render(`home.ejs`, context)
})

app.listen(4000, () => console.log('starting server at port:', PORT))