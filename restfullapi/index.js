const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const PORT = 8000;

const app = express();


// introducing middlewares

app.use(express.urlencoded({extended: false}));


//CREATING ROUTES

// html rendering -- done by the apps front end
app.get("/users", (req, res) => {
    const html = `
      <ul>
        ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")};
      </ul>
    `
    res.send(html);
});




// json rendering or client side rendering


// show all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    //console.log(body);
    users.push({...body, id: users.length + 1} );
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
        return res.json({status : "Sucess", id: users.length})
    });
});

//showing selected users -- using a common route name 

app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
           
    })
    return res.json({status : "pending"});
})
.delete((req, res) => {
    return res.json({status : "pending"});
});



app.listen(PORT, () => {console.log(`SERVER STARTED ON PORT : ` + PORT)});