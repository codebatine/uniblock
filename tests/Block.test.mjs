import { dirname } from 'path';
import { fileURLToPath } from 'url';
import Block from '../models/Block.mjs';

const __appdir = dirname(fileURLToPath(import.meta.url));

test('Test for creating a block.', () => {
  const timestamp = new Date().toISOString();
  const blockIndex = 0;
  const previousBlockHash = 'previousHash';
  const currentBlockHash = 'currentHash';
  const data = 'data';
  const difficulty = 5;

  const block = new Block(
    timestamp,
    blockIndex,
    previousBlockHash,
    currentBlockHash,
    data,
    difficulty,
  );

  expect(block).toEqual({
    timestamp,
    blockIndex,
    previousBlockHash,
    currentBlockHash,
    data,
    difficulty,
  });
});
