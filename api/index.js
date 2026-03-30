import express from 'express'
import cors from 'cors'

import  produtosRoute from './route/produtos.js'

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use('/', produtosRoute)

app.listen(port)