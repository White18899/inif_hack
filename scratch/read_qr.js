import fs from 'fs';

const buf = fs.readFileSync('public/payment-qr.jpeg');
console.log('File size:', buf.length);
