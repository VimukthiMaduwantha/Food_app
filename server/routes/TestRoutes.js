const express = require('express')
const TestController = require('../controllers/ItemController');

const TestRouter = express.Router();

//create 
TestRouter.post('/testItemInsertion', TestController.createItem);

//get all 
TestRouter.get('/getAllTestItems', TestController.getAllItems);

//delete item
TestRouter.delete('/deleteTestItem/:id', TestController.deleteTest)

//get selcted item details
TestRouter.get('/getTestItemByID/:id', TestController.getTestItemDetailsByID)

//update a selected data
TestRouter.put('/UpdateDetails', TestController.updateSelctedItem)

module.exports = TestRouter;