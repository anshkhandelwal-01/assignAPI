const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
module.exports.register = async (req, res) => {
  try {
  
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.redirect('/');
  } catch (error) {
    res.redirect("/api/auth/signUp");
  }
};

// User login
module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      res.redirect('/');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.redirect('/');
    }
    const token = jwt.sign({ userId: user.id }, "authentication", { expiresIn: '1h' });
    res.redirect(`/api/url/edit/${user.id}`);
  } catch (error) {
    res.redirect('/');
  }
};

// Render signup page
module.exports.signUp = function (req, res) {
  return res.render('sign_up', {
      title: "Sign-Up"
  });
}
