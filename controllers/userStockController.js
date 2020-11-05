const UserStock = require('../models/userStock');

class UserStockController {

    static read(req,res,next) {
        UserStock.find({})
            .then(stocks => res.status(200).json(stocks))
            .catch(next)
    };

    static readMe(req,res,next) {
        let stockId = req.params.stockId;
        UserStock.findOne({_id: stockId})
            .then(stock => res.status(200).json(stock))
            .catch(next)
    };

    static create(req,res,next) {
        let { company, amount, user } = req.body;
    };

};

module.exports = UserStockController;