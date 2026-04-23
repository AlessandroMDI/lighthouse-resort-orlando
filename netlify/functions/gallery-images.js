const fs   = require('fs');
const path = require('path');

exports.handler = async function() {
  const dir = path.join(__dirname, '..', '..', 'images', 'gallery');
  const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
  let files = [];
  try {
    files = fs.readdirSync(dir).filter(f => allowed.has(path.extname(f).toLowerCase()));
  } catch (_) {}
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
    body: JSON.stringify({ images: files })
  };
};
