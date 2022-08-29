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
    res.render('realtor/index.ejs', {realtors: allRealtors, houses: allHouses})
   }
   catch(err){
    console.log(err)
    next()
   }
   // res.send('all realtors')
});
//////////////
// Reviews "new" route - GET request- displays form for creating a new review
// This route will be considered optional, logically we would not want a whole page for creating a review, instead adding a form on a product show page. 
router.get('/new', (req, res) => {
    res.send('new review')
})

// Review "show" route - GET request - display details about one product 
// http://localhost:4000/reviews/0*****

router.get('/:id/', async (req, res, next) => {
    try{
        const foundReview= await db.Review.findById(req.params.id).populate('product').exec()
        res.render('reviews/show.ejs', {review:foundReview})
    }
    catch(err){
        console.log(err)
        next()
    }
   // res.send('review detail')
})

// Reviews "edit" route - GET request - display an edit form for one review
// http://localhost:4000/reviews/0/edit

router.get('/:id/edit', async (req,res, next)=>{
    res.send('review edit')
		// note-we will not be demoing this procedure, but is very similar to 'products'
})

// Review "create" route - POST request -> request body (new review data)

// http://localhost:4000/reviews/

router.post('/', async (req, res, next) => {
    try{
        const newReview= await db.Review.create(req.body)
        //res.send(newReview)
        res.redirect('/reviews/'+newReview._id)
        //res.redirect(`/products/${newReview.product})
    }
    catch(err){
        console.log(err)
        next()
        //skip this request and run to next avaialbe (404)
    }
    
    //res.send('review create')
})

// Reviews "destroy" route - DELETE request - removes data from reviews collection and redirects to index route

// http://localhost:4000/reviews/0/ 

router.delete('/:id', async (req,res, next)=>{
    res.send('review delete')
})

// Reviews "update" route - PUT request - update the Review document and redirects to Product show route
// http://localhost:4000/reviews/0/

router.put('/:id', async (req, res, next)=>{
	res.send('review update')
})

module.exports = router