/** @format */
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const messages = [];

app.get('/messages', (req, res) => {
	res.json(messages);
});

app.post('/messages', (req, res) => {
	const {body} = req;
    body.id = Date.now()
    messages.push(body);
	console.log(body);
	res.status(204).end();
});

app.listen(3001, console.log('starting'));
