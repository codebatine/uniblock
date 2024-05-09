import { dirname } from 'path';
import { fileURLToPath } from 'url';
import Block from '../models/Block.mjs';

const __appdir = dirname(fileURLToPath(import.meta.url));

function createAndTestBlock(
  timestamp,
  blockIndex,
  previousBlockHash,
  currentBlockHash,
  data,
  difficulty,
) {
  const block = new Block(
    timestamp,
    blockIndex,
    previousBlockHash,
    currentBlockHash,
    data,
    difficulty,
  );

  expect(block.timestamp).toEqual(timestamp);
  expect(block.blockIndex).toEqual(blockIndex);
  expect(block.previousBlockHash).toEqual(previousBlockHash);
  expect(block.currentBlockHash).toEqual(currentBlockHash);
  expect(block.data).toEqual(data);
  expect(block.difficulty).toEqual(difficulty);

  return block;
}

test('Test block creation with default difficulty.', () => {
  const timestamp = new Date().toISOString();
  createAndTestBlock(
    timestamp,
    0,
    'previousHash',
    'currentHash',
    'data',
    process.env.DIFFICULTY,
  );
});

test('Test linking of two blocks.', () => {
  const timestamp = new Date().toISOString();
  const block1 = createAndTestBlock(
    timestamp,
    0,
    'previousHash',
    'currentHash1',
    'data1',
    5,
  );
  const block2 = createAndTestBlock(
    timestamp,
    1,
    block1.currentBlockHash,
    'currentHash2',
    'data2',
    5,
  );

  expect(block2.previousBlockHash).toEqual(block1.currentBlockHash);
});
