/* const express = require("express");
const app = express();
// let port = 7000;

// const packages = require("./data/tour");

// app.get("/",(req,res) => {
//     res.send("Hello World");
// });

// app.get("/packages",(req,res)=>{
//     res.json(packages);
// });

// app.get("/packages/:id",(req,res)=>{
//     const packagesId = parseInt(req.params.id);
//     const selectedPackages = packages.find(item => item.id === packagesId);
//     res.json(selectedPackages);
// });

// app.get("/packages", (req, res) => {
//     const {des} = req.query;

//     if (des) {
//         const filtered = packages.filter((pkg) =>
//             pkg.name.includes(des) |
//         pkg.description.iclude(des));
//         return res.json(filtered);

//     }
//       res.json(packages);
// });

// app.listen(port,() => {
//   console.log(`Server is running on port ${port}`);
// });



/* const tourRoutes = require('./routes/tourRoutes'); */

/*app.use(express.json());
/* app.use('/api', tourRoutes);*/
/* Client --> Request --> Middleware1 --> Middleware2 --> Middleware3 --> Response */

/* const Middleware1 = (req,res,next)=>{
    console.log("Middleware 1")
    next();

} */

/*
const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next()
}

app.use(logger);

const checkAge = (req,res,next)=>{
    const age = 19;
    if(age<18){
        return res.status(403).json({
            message:"You are not allowed to access this package"});

        
        next();
    };
};

app.use(checkAge);

app.get("/",(req,res)=>{
    res.send("Hello World")
});


app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}) */

/* const cr = require("crypto");
const hash = cr.createHash("sha256").update("Hello World").digest("hex")
console.log(hash)
console.log(cr.randomUUID()) */

/* require('dotenv').config
const process = require('process');
console.log(process.env.PORT)
console.log(process.env.argv) */


/* require('dotenv').config
 *//*const process = require('process');
console.log(process.env) */

/* const process = require('process');
console.log(process) */
/* const express = require('express');
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server is running on Port:",port)
})

app.get('/',(req,res)=>{
    console.log(req)
    res.send("Hello World")
}) */

