import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1@",
  database: "Costs",
});

app.get("/trips", (req, res) => {
  const q = "SELECT * FROM costs";
  db.query(q,(err, data)=> {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});


 app.get("/filtered/:maxBudget", (req, res) => {
   const maxBudget = req.params.maxBudget;
   const q = "SELECT * FROM costs WHERE accomodation < " + maxBudget;
   db.query(q, (err, data) => {
     if (err) {
       console.log(err);
       return res.json(err);
     }
     return res.json(data);   });
 });
 
 app.get("/filtered/:maxBudget/:", (req, res) => {
  const maxBudget = req.params.maxBudget;
  const q = "SELECT * FROM costs WHERE accomodation < " + maxBudget;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);   });
});



app.listen(8800, () => {
  console.log("Connected to backend.");
});
