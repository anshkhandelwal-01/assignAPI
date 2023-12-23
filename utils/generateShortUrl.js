const crypto = require('crypto');

const generateShortUrl = () => {
  const hash = crypto.createHash('sha256');
  const randomBytes = crypto.randomBytes(16);
  const uniqueId = hash.update(randomBytes).digest('hex').slice(0, 8);

  return uniqueId;
};

module.exports = generateShortUrl;
