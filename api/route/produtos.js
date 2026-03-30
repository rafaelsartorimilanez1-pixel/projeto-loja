import express from 'express'

import { getProdutos } from '../controllers/produto.js'; //criar depois

const router = express.Router()

router.get('/', getProdutos);

export default router