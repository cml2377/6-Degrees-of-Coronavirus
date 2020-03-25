const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/user', {
    useNewUrlParser: true,
    useFindAndModify: false
})

const userSeed = [
    {
        email: 'crystal@example.com',
        name: 'Crystal Ly',
        city: 'Austin',
        status: 'Not Sick/Asymptomatic'
    },
    {
        email: 'anthony@example.com',
        name: 'Anthony Garza',
        city: 'Austin',
        status: 'Not Sick/Asymptomatic'
    },
    {
        email: 'sick@example.com',
        name: 'Crystal Sickly',
        city: 'Austin',
        status: 'Sick/Presumptive Positive'
    },
    {
        email: 'confirmed@example.com',
        name: 'Crystal Confirmed',
        city: 'Austin',
        status: 'Positive/Confirmed COVID-19'
    },
]

db.Users.deleteMany({})
    .then(() => db.Users.insertMany(userSeed))
    .then(data => {
        console.log(data.length + ' records inserted!')
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })