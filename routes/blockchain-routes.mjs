import express from 'express';
import {
  createBlock,
  getBlockchain,
  getBlockByIndex,
} from '../controllers/blockchain-controller.mjs';

const router = express.Router();

router
  .get('/', getBlockchain)
  .get('/:index', getBlockByIndex)
  .post('/mine', createBlock);

export default router;
