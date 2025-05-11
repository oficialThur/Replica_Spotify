import express from 'express';
import { db } from './connect.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! 000');
});

app.get('/artists', async(req, res) => {
    res.send(await db.collection('artists').find({}).toArra());
});

app.get('/songs', async(req, res) => {
    res.send(await db.collection('songs').find({}).toArra());
});

app.listen(PORT, () => {
    console.log(`Servidor escutando a porta ${PORT}`);
}); 