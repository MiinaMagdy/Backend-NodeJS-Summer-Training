const express = require('express');
const Users = require('./assets/Users');
const Sports = require('./assets/Sports');
const Animals = require('./assets/Animals');

const app = express();
const port = 3000;

app.get('/users/get', async (req, res) => {
    res.send(await Users.getRandomUser());
});

app.get('/sports/get', async (req, res) => {
    res.send(await Sports.getSports());
});

app.get('/animals/get', async (req, res) => {
    res.send(await Animals.getCatFact());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});