const express = require('express')
const cors = require('cors');//web-expressjs
var bodyParser = require('body-parser')

const app = express()
app.use(cors());
// parse application/json
app.use(bodyParser.json())


// app.get('/', (req, res) => {
//     const fruit = {
//         products: 'Alu',
//         price: 22
//     }
//     res.send(fruit);
// })

const users = ['Abdullah', 'Alim', 'Jamil', 'Jamila', 'Ar-Rahman'];

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({ id, name });
})

// post
app.post('/addUser', (req, res) => {
    // Save to database
    const user = req.body;
    user.id = 313;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to part 3000'));