import * as express from 'express';

const app = express();

const port = 9000;

app.get('/', (req, res) => {
    res.status(200).send('helloworld');
});

app.listen(port, () => console.log(`Running on port ${port}`));
