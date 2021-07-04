const express = require('express');

const app = express();
const USERS = [
    {
     "uid": "e96wdinar2bt1hopn3dqzb-108mve2hjs68-",
     "username": "percy.kris",
     "email": "percy.kris@email.com",
     "employment": "Marketing Liaison",
     "address": "United States",
     "subscription": "Premium",
     "id": "1"
    },
    {
     "uid": "gy3nvndxhfooen9raa2d8hal9vnt-myv37lw",
     "username": "terrance.nolan",
     "email": "terrance.nolan@email.com",
     "employment": "Future Facilitator",
     "address": "United States",
     "subscription": "Diamond",
     "id": "2"
    },
    {
     "uid": "vt6ppeliqnocqxqomek82975js4p11x6cnl0",
     "username": "wilmer.armstrong",
     "email": "wilmer.armstrong@email.com",
     "employment": "Community-Services Planner",
     "address": "United States",
     "subscription": "Starter",
     "id": "3"
    },
    {
     "uid": "vx1mx3rmguktx7gl4yeca7i7e3s5v3hg7pm8",
     "username": "dane.paucek",
     "email": "dane.paucek@email.com",
     "employment": "National Developer",
     "address": "United States",
     "subscription": "Gold",
     "id": "4"
    },
    {
     "uid": "agrhfq6skiimsqnblshhx2-sh64c6juvpclr",
     "username": "violeta.howe",
     "email": "violeta.howe@email.com",
     "employment": "Internal Hospitality Developer",
     "address": "United States",
     "subscription": "Bronze",
     "id": "5"
    },
    {
     "uid": "rn7ztg1k0p33hcl5zw61foc2p1etvgrak42q",
     "username": "wilson.torphy",
     "email": "wilson.torphy@email.com",
     "employment": "Construction Specialist",
     "address": "United States",
     "subscription": "Business",
     "id": "6"
    },
    {
     "uid": "4w99ahfrilna9g7ni6srph802u16vwgv90gj",
     "username": "deon.feeney",
     "email": "deon.feeney@email.com",
     "employment": "Design Producer",
     "address": "United States",
     "subscription": "Essential",
     "id": "7"
    },
    {
     "uid": "e6r6xbivnpce-mvp3x7kp44-q-7u3xhgd6g1",
     "username": "erick.langworth",
     "email": "erick.langworth@email.com",
     "employment": "Community-Services Rep",
     "address": "United States",
     "subscription": "Platinum",
     "id": "8"
    },
    {
     "uid": "p9m-txpihqd5latjgbzpfdrwdyc9decl4rbk",
     "username": "mario.grady",
     "email": "mario.grady@email.com",
     "employment": "Technology Architect",
     "address": "United States",
     "subscription": "Essential",
     "id": "9"
    },
    {
     "uid": "2j4zro6zxk-hn240cdkgex4b7wl4mmobdfkb",
     "username": "iesha.krajcik",
     "email": "iesha.krajcik@email.com",
     "employment": "Government Developer",
     "address": "United States",
     "subscription": "Starter",
     "id": "10"
    }
   ]
/* Middleware  */
app.use(express.json())
app.get('/',(req,res) => {
    res.send("Data received")
})
app.get('/users',(req,res) => {
    res.send(USERS);
})
app.get('/users/:id',(req,res) => {
    /* params wwill be part of request */
    console.log(req.params.id);
    let result = USERS.find(user => user.id === req.params.id)
    console.log(result);
    res.send(result);

})
app.post('/users',(req,res) => {
    /* we are requesting to add some data to API */
   //Below will won't work - bcz we need to inform express that the data coming from req.body is the JSON Data. 
   //To do that we will use Middleware. with that we need to parse the data
     const user = req.body;
    console.log(user);
    console.log([...USERS,user])
    res.send([...USERS,user]); 
})
app.listen(3000,()=> console.log("app started - Using"));