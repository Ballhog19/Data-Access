const db = require('../config/db.manager');

exports.getAllCustomers = function (req, res) {
    const salesProduct = db.getAllCustomers().then(results=>{
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        }); // send all the data
    });
}
exports.getCustomerByID = function( req, res) {
    const {id} = req.params; // get id
    const salesProduct = db.getCustomerByID(id).then(results=>{
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        }); //send all the data
    });
}
exports.createNewCustomer = function( req, res){ // must select the body to be raw-JSON in Postman
    const {body} = req;// req.body (attribute)
    //const {id} = req.params;// get (attribute)
    const salesProduct = db.createNewCustomer(body).then(results=>{
        console.log({results});
        res.status(200).json({
            status: 'successful'
        }); //send all the data
    });
}
exports.patchCustomerById = function( req, res){ // must select the body to be raw-JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id (attribute)
    const salesProduct = db.patchCustomerById(body, id).then(results=> {
        console.log(results);
        res.status(200).json({
            status: 'successful'
        }) //send all the data
    });
}

exports.deleteCustomerByID = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id
    const deleteSales = db.deleteCustomerByID(id).then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        })
    });
}