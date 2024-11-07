import express from 'express';
import { getPeople, getPerson, getChildren } from './database.js'; // Ensure getChildren is imported
import cors from 'cors';

const app = express();
app.use(cors());


app.get("/people", async (req, res) => {
    const people = await getPeople();
    res.send(people);
});

app.get("/people/:id", async (req, res) => {
    const person = await getPerson(req.params.id);
    if (!person) {
        return res.status(404).send("Person not found");
    }
    res.send(person);
});

// New route for getting children of a person
app.get("/people/:id/children", async (req, res) => {
    try {
        const children = await getChildren(req.params.id);
        res.send(children);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while retrieving children.');
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});
