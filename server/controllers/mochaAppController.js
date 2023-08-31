const db = require('../models/mochaAppModels.js');

const mochaAppController = {};

mochaAppController.getMocha = (req, res, next) => {
    db.query(
        'SELECT mochas.*, restaurants.name FROM mochas INNER JOIN restaurants ON mochas.restaurant_id = restaurants.id', 
        null,
        data => {
            // console.log(data);
            res.locals.mochas = data.rows;
            return next();
        }
    )
}

mochaAppController.getReviews = (req, res, next) =>{

    const id = req.params.id;
    db.query(
        'SELECT * FROM reviews WHERE mocha_id = $1', 
        [id], 
        data => {
            console.log(data)
            res.locals.reviews = data.rows;
            return next();
        }
    )
}

module.exports = mochaAppController;