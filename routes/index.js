const express = require('express');
const Router = express.Router();
const { UserAuth } = require('../middlewares/auth');
const UserController = require('../controllers/userController');
const UserStockController = require('../controllers/userStockController');
const CompanyController = require('../controllers/companyController');
const HistoryController = require('../controllers/historyController');

//User
Router.get('/users', UserController.read);
Router.get('/users-me', UserAuth, UserController.readMe);
Router.post('/users', UserController.create, HistoryController.create);
Router.post('/users/login', UserController.login);

//Company
Router.get('/company', CompanyController.read);
Router.get('/company-me/:companyId', CompanyController.readMe);
Router.post('/company', CompanyController.create);

//History
Router.get('/history',UserAuth,HistoryController.read);

//Stock
Router.post('/stock', UserAuth, UserStockController.create, HistoryController.create);
Router.get('/stock', UserStockController.read)


Router.get('/test', (req,res,next) => {
    const User1 = require('../models/user');
    User1.find({})
        .then(users => res.status(200).json(users)) 
})

Router.get('/test2', (req,res,next) => {
    const User1 = require('../models/user');
    User1.deleteMany({}).then(() => res.status(200).json({message: "success"}))
});

module.exports = Router;