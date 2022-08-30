const express = require('express')
const router = express.Router()


// MIDDLEWARE

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const db = require('../models')
console.log('realtor model test', db.Realtor)


router.get('/', async (req, res, next) => {
   try{
    const allRealtor= await db.Realtor.find()
    const allHouses= await db.House.find()
    res.render('realtor/index_realtor.ejs', {realtor: allRealtor, houses: allHouses})
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
        const allRealtors= await db.Realtor.find()
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
        const foundRealtor= await db.Realtor.findById(req.params.id)
        const allHouse= await db.House.find({realtor: req.params.id})
        
        res.render('realtor/show_realtor.ejs', {realtor:foundRealtor, id: foundRealtor._id, house:allHouse })
    }
    catch(err){
        console.log(err)
        next()
    }
   // res.send('realtor detail')
})

//EDIT

router.get('/:id/edit', async (req,res, next)=>{
    try{
        const updatedRealtor= await db.Realtor.findById(req.params.id)
        
        let context= {realtor: updatedRealtor}
        return res.render('realtor/edit_realtor.ejs', context)

    }catch(error){
        console.log(error)
        next()
    }
})

//POST ROUTE

router.post('/', async (req, res, next) => {
    try{

        const newRealtor= await db.Realtor.create(req.body)
        //res.send(newRealtor)
        //res.redirect('/realtor/'+newRealtor._id)
       // res.redirect(`/realtor/${newRealtor.house}`)
       res.redirect('/realtor')
    }
    catch(err){
        console.log(err)
        next()
    }
    
    //res.send('realtor create')
})


//DELETE

router.delete("/:realtorId", async (req, res) => {
    try{
  
      const foundRealtor = await db.Realtor.findByIdAndDelete(req.params.realtorId)
      console.log(foundRealtor)
      return res.redirect("/realtor");
  
  }catch(err){
      console.log(err)
  }
  });


//PUT EDIT

router.put('/:id', async (req, res, next)=>{
    try{
        const updatedRealtor= await db.Realtor.findByIdAndUpdate(req.params.id, req.body)
        
        return res.redirect('/realtor')
    }catch(error){
        console.log(error)
        next()
    }
})

module.exports = router