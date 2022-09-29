const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.getAllCustomers)
    .post(userController.createNewCustomer);

router
    .route('/:id')
    .get(userController.getCustomersByID)
    .patch(userController.patchCustomersById)
    .delete(userController.deleteCustomerByID);
    
module.exports = router;