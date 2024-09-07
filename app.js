const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming requests
app.use(express.urlencoded({ extended: true }));

// Define routes

// GET home page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// GET about page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// GET contact page
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// POST contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Thanks, ${name}! Your message has been received.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
