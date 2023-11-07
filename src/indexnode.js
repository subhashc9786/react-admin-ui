const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());


let users = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/10392242/pexels-photo-10392242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        lastName: "Iron",
        firstName: "Man",
        email: "IronMan@gmail.com",
        phone: "9876543210",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/3149865/pexels-photo-3149865.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Hubbard",
        firstName: "Eula",
        email: "fdgdfgdfgd@gmail.com",
        phone: "454354354353",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/15304383/pexels-photo-15304383/free-photo-of-a-girl-in-red-animation-shirt-smiling.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "dora",
        firstName: "Eula",
        email: "dora2gmail.com",
        phone: "53654674435",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Load",
        firstName: "Durs",
        email: "load2gmai.com",
        phone: "4534534545",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/13246954/pexels-photo-13246954.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "spider",
        firstName: "Man",
        email: "spiderman@gmail.com",
        phone: "",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/18486319/pexels-photo-18486319/free-photo-of-daredevil-wallpaper-for-phones.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "harbard",
        firstName: "Eula",
        email: "harbard@gmail.com",
        phone: "785676756567",
        createdAt: "30.04.2023",
        verified: true,
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/14683726/pexels-photo-14683726.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "ghost",
        firstName: "Rupa",
        email: "ghost@gmail.com",
        phone: "5656565656",
        createdAt: "21.03.2023",
        verified: true,
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/16774972/pexels-photo-16774972/free-photo-of-portrait.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Photo",
        firstName: "tic",
        email: "photo2gmail.com",
        phone: "5646565656",
        createdAt: "03.11.2023",
        verified: true,
    },
    {
        id: 9,
        img: "https://images.pexels.com/photos/16132920/pexels-photo-16132920/free-photo-of-majestic-marvel-the-enchanting-dome-of-taj-mahal.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Taj Mahal",
        firstName: "Agra",
        email: "tajmahal@gmail.com",
        phone: "4545454545",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 10,
        img: "https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "sweety",
        firstName: "Sharma",
        email: "sweetySharma@gmail.com",
        phone: "89675545677",
        createdAt: "05.09.1998",
        verified: true,
    },
    {
        id: 11,
        img: "https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Beauty",
        firstName: "Queen",
        email: "Beautyqueen@gmail.com",
        phone: "23433333343",
        createdAt: "15.06.2023",
        verified: true,
    },
    {
        id: 12,
        img: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "musks",
        firstName: "kule",
        email: "muks@gmail.com",
        phone: "67665655464",
        createdAt: "11.02.2023",
        verified: true,
    },
    {
        id: 13,
        img: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Green",
        firstName: "jula",
        email: "green@gmail.com",
        phone: "9876566777",
        createdAt: "24.08.2023",
        verified: true,
    },
    {
        id: 14,
        img: "https://images.pexels.com/photos/5682847/pexels-photo-5682847.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "World",
        firstName: "Hello",
        email: "hello@gmail.com",
        phone: "657567575464",
        createdAt: "01.08.2023",
        verified: true,
    },
    {
        id: 15,
        img: "https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "huka",
        firstName: "leya",
        email: "huke@gmail.com",
        phone: "5345345324343",
        createdAt: "01.02.2023",
        verified: true,
    }
]

//GET USERS
app.get('/api/users', (req, res) => {
    res.json(users)
})

//GET USER
app.get('/api/users/:id', (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    res.json(user)
})


//ADD USER
app.post('/api/users', (req, res) => {
    console.log(req.body);
    users.unshift(req.body)
    res.json(users);
})

//DELETE USER
app.delete('/api/users/:id', (req, res) => {
    users = users.filter((user) => user.id !== parseInt(req.params.id))
    res.json("User Deleted !")
})


app.listen(8800, () => {
    console.log(`Connected to Backend. ${port}`)
})
