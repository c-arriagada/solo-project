const db = require('../models/mochaAppModels.js');

const mochaAppController = {};

mochaAppController.getMocha = (req, res, next) => {
    db.query(
        'SELECT * FROM mochas', 
        null,
        data => {
            console.log(data);
            res.locals.mochas = data.rows;
            return next();
        }
    )
}

module.exports = mochaAppController;