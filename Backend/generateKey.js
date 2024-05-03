import { randomBytes } from 'crypto';

// Generate random bytes
const randomBytesData = randomBytes(32);

// Convert random bytes to base64
const randomKey = randomBytesData.toString('base64');

console.log(randomKey);