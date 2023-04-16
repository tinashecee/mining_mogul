const express = require('express');
//const exphbs = require('express-handlebars');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');
var db = require("./database.js")
//setup public folder
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
let currentUser;
app.get('', (req, res) => {
    
    res.render('index')
});

app.post("/add/mineral", async (req,res) => {
   let name=req.body.name
   let account_balance=1000000
   let mineral=""
   let location=""
   let type_of_mining=""
    var sql ='INSERT INTO user (name, account_balance, mineral, location, type_of_mining) VALUES (?,?,?,?,?)'
    var params =[name, account_balance, mineral, location, type_of_mining]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }else{
            var sql = "select * from user where name = ?"
            var params = [name]
            db.get(sql, params, (err, row) => {
                if (err) {
                  res.status(400).json({"error":err.message});
                  return;
                }
                currentUser=row
                console.log(row)
                res.render('mineral_selection',{layout:'./layouts/secondary',name:row.name,
                location:row.location,
                account_balance:row.account_balance,
                mineral:row.mineral,
                type_of_mining:row.type_of_mining} )
                
             });
        }
        
       
    });
})
app.get('/mineral-selection',async (req,res) =>{
    console.log(currentUser)
    res.render('mineral_selection',{layout:'./layouts/secondary',name:currentUser.name,
    location:currentUser.location,
    account_balance:currentUser.account_balance,
    mineral:currentUser.mineral,
    type_of_mining:currentUser.type_of_mining});
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));