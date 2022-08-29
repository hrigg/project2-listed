const express = require('express')
const router = express.Router()


// MIDDLEWARE

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const db = require('../models')
console.log('realtor model test', db.Realtor)


router.get('/', async (req, res, next) => {
   try{
    const allRealtor= await db.Realtor.find().populate('realtor').exec()
    const allHouses= await db.House.find()
    res.render('realtor/index_realtor.ejs', {realtors: allRealtor, houses: allHouses})
   }
   catch(err){
    console.log(err)
    next()
   }
   // res.send('all realtors')
});

//NEW ROUTE 
router.get('/new', async (req, res, next) => {
    try{
        const allRealtors= await db.Realtor.find().populate('house').exec()
        const allHouses= await db.House.find()
        res.render('realtor/new_realtor.ejs', {realtor: allRealtors, house: allHouses})
       }
       catch(err){
        console.log(err)
        next()
       }
})

//SHOW ROUTE

router.get('/:id/', async (req, res, next) => {
    try{
        const foundRealtor= await db.Realtor.findById(req.params.id).populate('house').exec()
        res.render('realtor/show_realtor.ejs', {realtor:foundRealtor})
    }
    catch(err){
        console.log(err)
        next()
    }
   // res.send('realtor detail')
})

//EDIT

router.get('/:id/edit', async (req,res, next)=>{
    res.send('realtor edit')
})

//POST ROUTE

router.post('/', async (req, res, next) => {
    try{
        const newRealtor= await db.Realtor.create(req.body)
        //res.send(newRealtor)
        //res.redirect('/realtor/'+newRealtor._id)
        res.redirect(`/realtor/${newRealtor.house}`)
    }
    catch(err){
        console.log(err)
        next()
    }
    
    //res.send('realtor create')
})


//DELETE

router.delete('/:id', async (req,res, next)=>{
    res.send('realtor delete')
})


//PUT EDIT

router.put('/:id', async (req, res, next)=>{
	res.send('realtor update')
})

module.exports = router