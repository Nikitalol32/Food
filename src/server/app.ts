import path from 'upath';
import express from 'express';
import cors from 'cors';

import { restaurants, segments, dishById, dishesBySegment } from '@/server/api';

const
	app = express(),
	port = 5540;

app.use(cors());
app.use('/static', express.static(path.join(process.cwd(), 'src/server/db/images')));

app.get('/api/restaurants', restaurants);
app.get('/api/menu/segments', segments);
app.get('/api/menu/segments/:segment', dishesBySegment);
app.get('/api/dish/:id', dishById);

app.get('*', (req, res) => {
	res.status(404).send('Not found');
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
});
