const db = require('../config/db.manager');

exports.getAllSales = function (req, res) {
    const salesProduct = db.getSalesProducts().then(results=>{
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        }); // send all the data
    });
}
exports.getSalesByID = function( req, res) {
    const {id} = req.params; // get id
    const salesProduct = db.getSalesByID(id).then(results=>{
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        }); //send all the data
    });
}
exports.createNewSales = function( req, res){ // must select the body to be raw-JSON in Postman
    const {body} = req;// req.body (attribute)
    //const {id} = req.params;// get (attribute)
    const salesProduct = db.createNewSales(body).then(results=>{
        console.log({results});
        res.status(200).json({
            status: 'successful'
        }); //send all the data
    });
}
exports.patchSalesById = function( req, res){ // must select the body to be raw-JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id (attribute)
    const salesProduct = db.patchSalesById(body, id).then(results=> {
        console.log(results);
        res.status(200).json({
            status: 'successful'
        }) //send all the data
    });
}

exports.deleteSalesByID = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id
    const deleteSales = db.deleteSalesByID(id).then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        })
    });
}