/** @format */

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const subscribers = {};

app.get('/messages/subscribe', (req, res) => {
	const ID = Math.ceil(Math.random() * 10000);
	subscribers[ID] = res;
});

app.post('/messages', (req, res) => {
	console.log(req.body);
	Object.entries(subscribers).forEach(([ID, response]) => {
		response.json(req.body);
		delete subscribers[ID];
	});
	res.status(200).end();
});

app.listen(3001, () => {
	console.log('starting');
});
