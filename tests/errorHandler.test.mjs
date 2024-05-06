import { handleError } from '../utilities/errorHandler.mjs';

for (let i = 0; i < 10; i++) {
  try {
    handleError(`This is test error message ${i}`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}
