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
    res.render('index.ejs')
});

router.delete("/:houseId", async (req, res) => {
  try{

    const foundHouse = await db.House.findByIdAndDelete(req.params.houseId)
    console.log(foundHouse)
    return res.redirect("/houses");

}catch(err){
    console.log(err)
}
});
module.exports = router;