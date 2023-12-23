const Url = require('../models/Url');
const generateShortUrl = require('../utils/generateShortUrl');
const User = require('../models/User');

// Shorten a URL
module.exports.shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const user = await User.findById(req.params.id);
    console.log(user);
    const shortUrl = generateShortUrl();
    const url = new Url({ originalUrl, shortUrl, user: user.id });
    await url.save();
    res.render('result',
      { 
        title: "Result",
        originalUrl, 
        shortUrl 
      });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Render Input URL page
module.exports.edit = async (req, res)=>{
  try {
    res.render('edit',{
      title: "App",
      id: req.params.id
  });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}