const express = require("express");
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));

const db = require("../models");

<<<<<<< HEAD
router.get('/new',async  (req, res) => {
    // const realtor= db.Realtor.find()
    // const context= {realtor, realtor}
    const allHouse= await db.House.find()
    const allRealtor= await db.Realtor.find()
			// Here we are requesting all the products to add into the context
    //   db.Realtor.find({}, (error, allRealtor) => {
    //     if (error) {
    //       console.log(error);
    //       req.error = error;
    //       return next();
    //     }
     const context = { realtor: allRealtor, house: allHouse };
    //     return res.render("zindex.ejs", context);
    //   });
    console.log('realtor' , allRealtor)
    res.render('new.ejs', context)
    });
   
=======
router.get('/new', async (req, res) => {
    const foundHouse = await db.House.find()
    const foundRealtor = await db.Realtor.find()
        const context = { realtor: foundRealtor, house: foundHouse };
        res.render('new.ejs', context);
      });
>>>>>>> f158a879546d22b817118055330ca9f5fb6b20e0

router.post("/", async (req, res) => {
    const createdHouse = req.body;
    try {
      const newHouse = await db.House.create(createdHouse);
     const realtor=req.body.realtor
      console.log(newHouse);
  
      res.redirect("/house");
  
    } catch (err) {
      console.log(err)
    }
  });

router.get('/', async (req, res) => {
    
    try{
        const allHouses= await db.House.find()
        const dcHouse= await db.House.find({city: 'dc'})
        const chicagoHouse= await db.House.find({city: 'chicago'})
        const dallasHouse= await db.House.find({city: 'dallas'})
        const context= {dcHouse: dcHouse, chicagoHouse: chicagoHouse, dallasHouse: dallasHouse, houses: allHouses}
        res.render("index.ejs", context);
    
    } catch(err){
        console.log(err)
    }  
    });

router.get('/dc', async (req, res) => {
        try {
        const dcHouse= await db.House.find({city: 'dc'})
        const context= {dcHouse: dcHouse}
        res.render('Cities/dc_index.ejs', context);
    } catch(err){
        console.log(err)
    } 
    });

router.get('/chicago', async (req, res) => {
        try {
        const chicagoHouse= await db.House.find({city: 'chicago'})
        const context= {chicagoHouse: chicagoHouse}
        res.render('Cities/chicago_index.ejs', context);
    } catch(err){
        console.log(err)
    } 
    });

router.get('/dallas', async (req, res) => {
        try {
        const dallasHouse= await db.House.find({city: 'dallas'})
        const context= {dallasHouse: dallasHouse}
        res.render('Cities/dallas_index.ejs', context);
    } catch(err){
        console.log(err)
    } 
    });

router.get("/:houseIndex", async (req, res) => {

    try{
  
      const foundHouse = await db.House.findById(req.params.houseIndex)
      res.render("show.ejs", { house: foundHouse, id: foundHouse._id });
  
  }catch(err){
      console.log(err)
  }
  });

router.delete("/:houseId", async (req, res) => {
  try{

    const foundHouse = await db.House.findByIdAndDelete(req.params.houseId)
    console.log(foundHouse)
    return res.redirect("/house");

}catch(err){
    console.log(err)
}
});
module.exports = router;