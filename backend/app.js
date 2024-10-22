import express from 'express';

import { getPeople } from './database.js';

const app = express();

app.get("/people", async (req, res) => {
    const people = await getPeople();
    res.send(people);
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})