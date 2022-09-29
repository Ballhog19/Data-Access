const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);


/*-------------------------------
*   Sales Product Functions
*-------------------------------*/
async function getSalesProducts(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        SELECT TOP(20)
                            productId,
                            name,
                            productNumber,
                            color
                            listPrice
                        FROM
                            salesLT.Product
                        `);
    console.log(`Returned SQL results`);
    return results;
}

async function getSalesByID(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        SELECT
                            productId,
                            name,
                            productNumber,
                            color,
                            listPrice
                        FROM
                            salesLT.Product
                        WHERE
                            productId = ${id}
                        `);
    console.log(`Returned SQL results`);
    return results;
}

async function createNewSales(body) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        INSERT INTO SalesLT.Product
                            (ProductID, ProductNumber, StandardCost, ListPrice, SellStartDate)
                        VALUES
                            (${body.productId}, ${body.productNumber}, ${body.standardCost}, ${body.listPrice}, ${body.sellStartDate})
                        `);
    console.log(`Returned SQL results`);
    return results;
}

async function patchSalesById(body, id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    var results;
    console.log('Getting data');
    Object.keys(body).forEach(key => {
        let value = body[key];
        results =  dbContext.request()
                            .query(`
                            UPDATE SalesLT.Product
                                ${key} = ${value}
                            WHERE
                                ProductId = ${id}
                            `)})
    console.log(`Returned SQL results`);
    return results;
}

async function deleteSalesByID(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        DELETE FROM 
                            SalesLT.Product                            
                        WHERE
                            ProductId = ${id}
                        `);
    console.log(`Returned SQL results`);
    return results;
}


/*-------------------------------
*   Customer Functions
*-------------------------------*/
async function getAllCustomers(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        SELECT TOP(20)
                            CustomerId,
                            FirstName,
                            LastName,
                            CompanyName,
                            Phone
                        FROM
                            salesLT.Customer
                        `);
    console.log(`Returned SQL results`);
    return results;
}

async function getCustomerByID(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        SELECT
                            CustomerId,
                            FirstName,
                            LastName,
                            CompanyName,
                            Phone
                        FROM
                            salesLT.Customer
                        WHERE
                            CustomerId = ${id}
                        `);
    console.log(`Returned SQL results`);
    return results;
}

async function createNewCustomer(body) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        INSERT INTO SalesLT.Customer
                            (CustomerId,
                                FirstName,
                                LastName,
                                CompanyName,
                                Phone)
                        VALUES
                            (${body.customerId},
                                ${body.firstName},
                                ${body.lastName},
                                ${body.companyName},
                                ${body.phone})
                        `);
    console.log(`Returned SQL results`);
    return results;
}

async function patchCustomerById(body, id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    var results;
    console.log('Getting data');
    Object.keys(body).forEach(key => {
        let value = body[key];
        results =  dbContext.request()
                            .query(`
                            UPDATE SalesLT.Customer
                                ${key} = ${value}
                            WHERE
                                ProductId = ${id}
                            `)})
    console.log(`Returned SQL results`);
    return results;
}

async function deleteCustomerByID(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        DELETE FROM 
                            SalesLT.Customer                           
                        WHERE
                            CustomerId = ${id}
                        `);
    console.log(`Returned SQL results`);
    return results;
}



//Export
module.exports = {getSalesProducts :getSalesProducts,
                    getSalesByID : getSalesByID,
                    createNewSales : createNewSales,
                    patchSalesById : patchSalesById,
                    deleteSalesByID : deleteSalesByID,
                    getAllCustomers : getAllCustomers,
                    getCustomerByID : getCustomerByID,
                    createNewCustomer : createNewCustomer,
                    patchCustomerById : patchCustomerById,
                    deleteCustomerByID : deleteCustomerByID};