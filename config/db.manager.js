const sql = require('mssql');

const dbConnection  = require('./db.config');
console.log(dbConnection);
async function getCustomers() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        SELECT TOP(20)
                            CustomerId,
                            Title,
                            FirstName,
                            LastName
                            CompanyName
                        FROM
                            salesLT.Customer
                        `);
    console.log(`Returned SQL results`);
    return results;
    }
    //Export
    module.exports = {getCustomers :getCustomers};