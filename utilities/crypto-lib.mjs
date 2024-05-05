import crypto from 'crypto';

export const createHash = (stringToHash) =>
  crypto.createHash('sha256').update(stringToHash).digest('hex');
