import express from 'express';

import { getPeople, getPerson } from './database.js';

const app = express();

app.get("/people", async (req, res) => {
    const people = await getPeople();
    res.send(people);
})

app.get("/people/:id", async (req, res) => {
    const person = await getPerson(req.params.id);
    if (!person) {
        return res.status(404).send("Person not found");
    }
    res.send(person);
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})