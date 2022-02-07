import * as express from 'express';
import { TRequest, TResponse } from './main.types';
const app = express();

const port = 9000;

app.get('/', (request: TRequest, response: TResponse<{ content: string }>) => {
    response.status(200).json({ content: 'helloworld' });
});

app.listen(port, () => console.log(`Running on port ${port}`));
