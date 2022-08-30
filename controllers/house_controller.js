const express = require("express");
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));

const db = require("../models");

router.get('/new', (req, res) => {
    res.render('new.ejs')
});

router.post("/", async (req, res) => {
    const createdHouse = req.body;
    try {
      const newHouse = await db.House.create(createdHouse);
  
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

router.get('/chicago', (req, res) => {
        res.render('chicaco_index.ejs')
    });

router.get('/dallas', (req, res) => {
        res.render('dallas_index.ejs')
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