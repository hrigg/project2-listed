const express = require("express");
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));

const db = require("../models");

router.get('/new', (req, res) => {
    res.render('new.ejs')
});

router.get("/:houseIndex", async (req, res) => {

    try{
  
      const foundHouse = await db.House.findById(req.params.houseIndex)
      res.render("show.ejs", { house: foundHouse, id: foundHouse._id });
  
  }catch(err){
      console.log(err)
  }
  });

router.get('/', (req, res) => {
    
    try{

        const dcHouse= await db.House.find({city: dc})
        const chicagoHouse= await db.House.find({city: chicago})
        const dallasHouse= await db.House.find({city: dallas})
        const context= {dcHouse: dcHouse, chicagoHouse: chicagoHouse, dallasHouse: dallasHouse}
        res.render("index.ejs", context);
    
    } catch(err){
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