var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE userS (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text UNIQUE, 
            age text UNIQUE,
            gender text UNIQUE,
            account_balance REAL, 
            mineral TEXT, 
            location TEXT,
            type_of_mining TEXT
            size INTEGER,
            permits TEXT,
            infrastructure TEXT,
            equipment TEXT,
            employees TEXT,
            )`,
        (err) => {
           /* 
           name:row.name,
                    location:row.location,
                    account_balance:row.account_balance,
                    mineral:row.mineral,
                    type_of_mining:row.type_of_mining,
                    size:0,
                    exploration:[],
                    permits:[],
                infrastructure:[],
                equipment:[],
            employees:[]
           
           if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                db.run(insert, ["user","user@example.com",md5("user123456")])
            }*/
        });  
    }
});


module.exports = db