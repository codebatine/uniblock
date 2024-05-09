import { handleError } from '../utilities/errorHandler.mjs';
import fs from 'fs';

for (let i = 0; i < 10; i++) {
  try {
    handleError(`This is test error message ${i}`);
  } catch (error) {
    fs.appendFile('logs/error.log', `${error.message}\n`, (err) => {
      if (err) {
        console.error('Failed to write to the log file:', err);
      }
    });
  }
}
