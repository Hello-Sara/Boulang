var express = require('express');
const ProductController = require('../controllers/ProductController');
var router = express.Router();
require('dotenv').config();



const API_KEY = process.env.API_KEY;

// Middleware pour vérifier le token
function verifyToken(req, res, next) {
  var token = req.headers['authorization'];
  if (!token || token.split(' ')[1] !== API_KEY) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  next();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/products', ProductController.getAllProducts);
router.post('/products',verifyToken, ProductController.createProduct);

module.exports = router;