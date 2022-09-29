/*Credentials
Connecting to Azure is much like connecting to any SQL Server instance with SQL
authentication in that you need a server, a database, a user name, and a
password. I've provided those values for you here:
Server: sqlservercentralpublic.database.windows.net (Links to an external site.)
Database: AdventureWorks
Select SQL login option from the Dropdown
User: sqlfamily
Password: sqlf@m1ly
It is exported as
process.env.DBUSERNAME,
process.env.PASSWORD,
process.env.DATABASE,
from the config.env file
*/
const sqlConfig = {
    server: "sqlservercentralpublic.database.windows.net",
    user: process.env.DBUSERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    pool: {
    idleTimeoutMillis: 60000
    },
    options:{
    encrypted: true, // for azure
    trustServerCertificate: false,
    useUTC: true
    }
    }
    module.exports = sqlConfig;