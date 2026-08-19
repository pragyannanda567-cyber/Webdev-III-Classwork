const tourModel = require("../Model/tourModel");

//Get All Tours
const getAllTours=(req,res)=>{
    const tours = tourModel.getAll();
    res.json(tours);
};

module.exports = {
    getAllTours
}