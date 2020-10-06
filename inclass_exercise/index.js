/*function hello(){
    return 'hello world';
}
console.log(hello());


var data = require("./data.js");

console.log(JSON.stringify(data.data));
*/
var express = require("express");
var app = express();
app.use(express.json());
let contacts = [
    {
        "name"    : "peter parker",
        "age"     : 21,  
        "email"   : "peter@mit.edu",
        "courses" : [
            {"number" : "1.00", "name" : "engr comp"},
            {"number" : "7.00", "name" : "intro bio"}    
        ]
    },
    {
        "name"    : "bruce wayne",
        "age"     : 32,  
        "email"   : "bruce@mit.edu",
        "courses" : [
            {"number" : "2.00", "name" : "intro ME"},
            {"number" : "3.00", "name" : "intro MS"}    
        ]
    },
    {
        "name"    : "diana prince",
        "age"     : 25,  
        "email"   : "diana@mit.edu",
        "courses" : [
            {"number" : "4.00", "name" : "intro arch"},
            {"number" : "5.00", "name" : "intro chem"}    
        ]
    }];
app.get("/", function (req, res) {
 res.send("<h1> Routes: try GET /contacts </h1>");
});
// list all contacts
app.get("/contacts", function (req, res) {
 res.json(contacts);
});
// add a contact
app.post("/contact", (req, res) => {
contacts.push({ name: req.body.name, email: req.body.email });
res.json(contacts);
});
   
app.listen(3000);
console.log("Running on port 3000");


var data = [
    {
        "name"    : "peter parker",
        "age"     : 21,  
        "email"   : "peter@mit.edu",
        "courses" : [
            {"number" : "1.00", "name" : "engr comp"},
            {"number" : "7.00", "name" : "intro bio"}    
        ]
    },
    {
        "name"    : "bruce wayne",
        "age"     : 32,  
        "email"   : "bruce@mit.edu",
        "courses" : [
            {"number" : "2.00", "name" : "intro ME"},
            {"number" : "3.00", "name" : "intro MS"}    
        ]
    },
    {
        "name"    : "diana prince",
        "age"     : 25,  
        "email"   : "diana@mit.edu",
        "courses" : [
            {"number" : "4.00", "name" : "intro arch"},
            {"number" : "5.00", "name" : "intro chem"}    
        ]
    }
];

console.log(JSON.stringify(data));
