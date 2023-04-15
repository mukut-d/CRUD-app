
const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "Mukut",
    multipleStatments : true
});


mysqlConnection.connect((err) =>{
    if(!err){
        console.log("Connected");
    }
    else {
        
        console.log(err);
        console.log("Connection Failed");
        
    }

})

module.exports=mysqlConnection;