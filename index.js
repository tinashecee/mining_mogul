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
let mineral=require("./public/assets/data/minerals.json")
let land=require("./public/assets/data/land.json")
let permits=require("./public/assets/data/permits.json")
let explorations=require("./public/assets/data/explorations.json")
let infrastructures=require("./public/assets/data/infrastructure.json")
let equipments=require("./public/assets/data/equipment.json")
let employeess=require("./public/assets/data/employeess.json")
//setup public folder
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use("/css",express.static("./"));
app.use("/js",express.static("./node_modules/video.js/dist"));
app.use("/",express.static("./node_modules/video.js/dist"));
app.use("/css",express.static("./node_modules/video.js/dist"));

app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));
//or
app.use("/",express.static("./node_modules/bootstrap/dist/"));
let currentUser;
app.get('', (req, res) => {
    
    res.render('index')
});

app.post("/add/mineral", async (req,res) => {
   let name=req.body.name
   let age = req.body.age
   let gender = req.body.gender
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
                currentUser={name:row.name,
                    age:age,
                    gender:gender,
                    location:row.location,
                    account_balance:row.account_balance,
                    mineral:row.mineral,
                    type_of_mining:row.type_of_mining,
                    size:0,
                    mineral_yeild:0,
                    permits:[],
                infrastructure:[],
                equipment:[],
            employees:[]}
                console.log(row)
                res.render('mineral_selection',{layout:'./layouts/mineral-selection-layout',name:row.name,
                location:row.location,
                account_balance:row.account_balance,
                mineral:row.mineral,
                level:1,
                type_of_mining:row.type_of_mining} )
                
             });
        }
        
       
    });
})
app.post("/add/land", async (req,res) => {
    let name=currentUser.name
    let mineral=req.body.mineral
    currentUser.mineral=mineral
    console.log(currentUser)
     var sql ='UPDATE user set mineral = coalesce(?,mineral) WHERE name = ?'
     var params =[mineral, name]
     db.run(sql, params, function (err, result) {
         if (err){
             res.status(400).json({"error": err.message}) 
             return;
         }else{
                 res.render('land_selection',{layout:'./layouts/land-selection-layout',name:currentUser.name,
                 location:currentUser.location,
                 account_balance:currentUser.account_balance,
                 mineral:currentUser.mineral,
                 level:1,
                 type_of_mining:currentUser.type_of_mining} )
                 
         }
         
        
     });
 })
 app.post("/add/permits", async (req,res) => {
    let location=req.body.location
    let price_sqrm=req.body.size
    land.forEach(e=>{
        if(e.location==location){
            price_sqrm=price_sqrm*e.price_square_metre
        }
    })
    if(req.body.location){
        currentUser.location=location
    }
    currentUser.location=location
    currentUser.size=req.body.size
    currentUser.account_balance=currentUser.account_balance-price_sqrm
    console.log(currentUser)
     var sql ='UPDATE user set location = coalesce(?,location), account_balance = coalesce(?,account_balance) WHERE name = ?'
     var params =[location,currentUser.account_balance, currentUser.name]
     db.run(sql, params, function (err, result) {
         if (err){
             res.status(400).json({"error": err.message})
             return;
         }else{
                 res.render('permits_selection',{layout:'./layouts/permit-selection-layout',name:currentUser.name,
                 location:currentUser.location,
                 account_balance:currentUser.account_balance,
                 mineral:currentUser.mineral,
                 level:1,
                 type_of_mining:currentUser.type_of_mining} )
                 
         }
         
        
     });
 })

 app.post("/add/Infrastructure", async (req,res) => {
    let permit = []
    let permitsCost = 0
    if(req.body.option1 != null){
       permit.push(req.body.option1)
       permits.forEach(e=>{
        if(e.type==req.body.option1){
            permitsCost+=e.cost
        }
       })
    }
    if(req.body.option2 != null){
        permit.push(req.body.option2)
        permits.forEach(e=>{
         if(e.type==req.body.option2){
             permitsCost+=e.cost
         }
        })
     }
     if(req.body.option3 != null){
        permit.push(req.body.option3)
        permits.forEach(e=>{
         if(e.type==req.body.option3){
             permitsCost+=e.cost
         }
        })
     }
     currentUser.permits=permit
     currentUser.account_balance-=permitsCost
     console.log(currentUser)
     var sql ='UPDATE user set account_balance = coalesce(?,account_balance) WHERE name = ?'
     var params =[currentUser.account_balance, currentUser.name]
     db.run(sql, params, function (err, result) {
         if (err){
             res.status(400).json({"error": err.message})
             return;
         }else{
                 res.render('initial_infrastructure',{layout:'./layouts/infrastructure-selection-layout',name:currentUser.name,
                 location:currentUser.location,
                 account_balance:currentUser.account_balance,
                 mineral:currentUser.mineral,
                 level:1,
                 type_of_mining:currentUser.type_of_mining} )
                 
         }
         
        
     });
 }) 
 app.post("/add/Mining-Process", async (req,res) => {
    let infrastructure = []
    let infrastructureCost = 0
    if(req.body.option1 != null){
        infrastructure.push(req.body.option1)
        infrastructures.forEach(e=>{
        if(e.type==req.body.option1){
            infrastructureCost+=e.cost
        }
       })
    }
    if(req.body.option2 != null){
        infrastructure.push(req.body.option2)
        infrastructures.forEach(e=>{
         if(e.type==req.body.option2){
            infrastructureCost+=e.cost
         }
        })
     }
     if(req.body.option3 != null){
        infrastructure.push(req.body.option3)
        infrastructures.forEach(e=>{
         if(e.type==req.body.option3){
            infrastructureCost+=e.cost
         }
        })
     }
     currentUser.infrastructure=infrastructure
     currentUser.account_balance-=infrastructureCost
     console.log(currentUser)
     var sql ='UPDATE user set account_balance = coalesce(?,account_balance) WHERE name = ?'
     var params =[currentUser.account_balance, currentUser.name]
     db.run(sql, params, function (err, result) {
         if (err){
             res.status(400).json({"error": err.message})
             return;
         }else{
                 res.render('mining_process',{layout:'./layouts/mining-process-selection-layout',name:currentUser.name,
                 location:currentUser.location,
                 account_balance:currentUser.account_balance,
                 mineral:currentUser.mineral,
                 level:1,
                 type_of_mining:currentUser.type_of_mining} )
                 
         }
         
        
     });
 })
 app.post("/add/Equipment", async (req,res) => {
    let type_of_mining ;
    if(req.body.option1 != null){
        type_of_mining=req.body.option1
        
    }
   
     currentUser.type_of_mining=type_of_mining
     console.log(currentUser)
     var sql ='UPDATE user set type_of_mining = coalesce(?,type_of_mining) WHERE name = ?'
     var params =[currentUser.type_of_mining, currentUser.name]
     db.run(sql, params, function (err, result) {
         if (err){
             res.status(400).json({"error": err.message})
             return;
         }else{
                 res.render('equipment_selection',{layout:'./layouts/equipment-selection-layout',name:currentUser.name,
                 location:currentUser.location,
                 account_balance:currentUser.account_balance,
                 mineral:currentUser.mineral,
                 level:1,
                 type_of_mining:currentUser.type_of_mining} )
                 
         }
         
        
     });
 })
 app.post("/add/Employment", async (req,res) => {
    let equipment = []
    let equipmentCost = 0
    if(req.body.option1 != null){
        equipment.push(req.body.option1)
        equipments.forEach(e=>{
        if(e.type==req.body.option1){
            equipmentCost+=e.cost
        }
       })
    }
    if(req.body.option2 != null){
        equipment.push(req.body.option2)
        equipments.forEach(e=>{
        if(e.type==req.body.option2){
            equipmentCost+=e.cost
        }
       })
    }
    if(req.body.option3 != null){
        equipment.push(req.body.option3)
        equipments.forEach(e=>{
        if(e.type==req.body.option3){
            equipmentCost+=e.cost
        }
       })
    }
    if(req.body.option4 != null){
        equipment.push(req.body.option4)
        equipments.forEach(e=>{
        if(e.type==req.body.option4){
            equipmentCost+=e.cost
        }
       })
    }
    if(req.body.option5 != null){
        equipment.push(req.body.option5)
        equipments.forEach(e=>{
        if(e.type==req.body.option5){
            equipmentCost+=e.cost
        }
       })
    }
    if(req.body.option6 != null){
        equipment.push(req.body.option6)
        equipments.forEach(e=>{
        if(e.type==req.body.option6){
            equipmentCost+=e.cost
        }
       })
    }
     currentUser.equipment=equipment
     currentUser.account_balance-=equipmentCost
     console.log(currentUser)
     var sql ='UPDATE user set account_balance = coalesce(?,account_balance) WHERE name = ?'
     var params =[currentUser.account_balance, currentUser.name]
     db.run(sql, params, function (err, result) {
         if (err){
             res.status(400).json({"error": err.message})
             return;
         }else{
                 res.render('employees_selection',{layout:'./layouts/employee-selection-layout',name:currentUser.name,
                 location:currentUser.location,
                 account_balance:currentUser.account_balance,
                 mineral:currentUser.mineral,
                 level:1,
                 type_of_mining:currentUser.type_of_mining} )
                 
         }
         
        
     });
 })
 
app.post("/simulation", async (req,res) => {
    let management_quantity=req.body.management
    let management_cost=0
    let general_employees_quantity=req.body.general_labour
    let general_employees_cost=0
    employeess.forEach(e=>{
        if(e.type=='general_labour'){
            general_employees_cost=general_employees_quantity*e.cost
        }
    })
    employeess.forEach(e=>{
        if(e.type=='management'){
            management_cost=management_quantity*e.cost
        }
    })
     let employeesCost = general_employees_cost+management_cost 
     currentUser.employees=[
        {type:"General Labour",
        size:general_employees_quantity},
        {type:"Management",
        size:management_quantity}
     ]
     currentUser.account_balance-=employeesCost
     console.log(currentUser)
     var sql ='UPDATE user set account_balance = coalesce(?,account_balance) WHERE name = ?'
     var params =[currentUser.account_balance, currentUser.name]
     db.run(sql, params, function (err, result) {
         if (err){
             res.status(400).json({"error": err.message})
             return;
         }else{
                // res.render('simulation',{layout:'./layouts/secondary',name:currentUser.name,
                res.render('simulation_level_one',{layout:'./layouts/simulation-layout',name:currentUser.name,
                 location:currentUser.location,
                 account_balance:currentUser.account_balance,
                 mineral:currentUser.mineral,
                 level:2,
                 type_of_mining:currentUser.type_of_mining} )
                 
         }
         
        
     });
 })
 app.get('/mineral-selection',async (req,res) =>{
    res.render('mineral_selection',{layout:'./layouts/mineral-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.post('/mineral-selection',async (req,res) =>{
    res.render('mineral_selection',{layout:'./layouts/mineral-selection-layout',name:"currentUser.name",
    level:1,
        account_balance:0});
});
app.get('/land-selection',async (req,res) =>{
    res.render('land_selection',{layout:'./layouts/land-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.get('/exploration-selection',async (req,res) =>{
    res.render('exploration_and_development_selection.ejs',{layout:'./layouts/land-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.get('/permits-selection',async (req,res) =>{
    res.render('permits_selection.ejs',{layout:'./layouts/permit-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.get('/infrastructure-selection',async (req,res) =>{
    res.render('initial_infrastructure.ejs',{layout:'./layouts/land-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.get('/mining-process-selection',async (req,res) =>{
    res.render('mining_process.ejs',{layout:'./layouts/land-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.get('/equipment-selection',async (req,res) =>{
    res.render('equipment_selection.ejs',{layout:'./layouts/equipment-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.get('/employee-selection',async (req,res) =>{
    res.render('employees_selection.ejs',{layout:'./layouts/land-selection-layout',name:"currentUser.name",
        account_balance:0});
});
app.get('/simulation',async (req,res) =>{
    res.render('simulation_level_one.ejs',{layout:'./layouts/simulation-layout',name:"currentUser.name",
        account_balance:0});
});

app.get('/simulation-level-onee',async (req,res) =>{
    res.render('simulation_level_one',{layout:'./layouts/main'});
});
app.get('/simulation-level-two',async (req,res) =>{
    res.render('simulation_level_two',{layout:'./layouts/main'});
});
app.get('/simulation-level-three',async (req,res) =>{
    res.render('simulation_level_three',{layout:'./layouts/main'});
});
app.get('/refinement-stage',async (req,res) =>{
    res.render('refinement_stage',{layout:'./layouts/main'});
});
app.get('/simulation-level-four',async (req,res) =>{
    res.render('simulation_level_four',{layout:'./layouts/main'});
});
app.get('/alternative-sales-channels',async (req,res) =>{
    res.render('alternative_sales_channels',{layout:'./layouts/simulation-layout'});
});
app.get('/mmcz',async (req,res) =>{
    res.render('mmcz_selection',{layout:'./layouts/mmcz-layout',mineral:currentUser.mineral, level:2,mineral_yeild,yeild:currentUser.mineral_yeild,name:currentUser.name});
});
app.get('/results',async (req,res) =>{
    res.render('results',{layout:'./layouts/main'});
});
app.get('/alternative',async (req,res) =>{
    res.render('alternative_sales_channels',{layout:'./layouts/simulation-layout'});
});
app.post('/add-ore',async (req,res) =>{
    let ore= req.body.yeild
    currentUser.mineral_yeild = ore
});
app.listen(PORT, console.log(`Server running on port ${PORT}`));