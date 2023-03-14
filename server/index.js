// Server to connect to MongoDB and act as a REST API for the client
import express from 'express';
import { getUsers, addUser } from './db.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Use Mongoose Connection to make queries
app.get('/api/users', async (req, res) => {
    const users = await getUsers();
    console.log(users);
    res.send(users);
});

app.post('/api/users', (req, res) => {
    const { email, password } = req.body;
    const rspns = addUser(email, password);
    res.status(rspns.status).send({ message: rspns.message });
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});