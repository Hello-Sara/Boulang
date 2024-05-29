var express = require('express');
const ProductController = require('../controllers/ProductController');
var jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();


const API_KEY = process.env.API_KEY;

// Middleware pour vérifier le token
function verifyToken(req, res, next) {
  var token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, 'YOUR_SECRET_KEY', function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }

    // si tout est bon, sauvegarder à la demande pour une utilisation dans d'autres routes
    req.userId = decoded.id;
    next();
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/products', ProductController.getAllProducts);
router.post('/products',verifyToken, ProductController.createProduct);

module.exports = router;