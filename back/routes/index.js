var express = require('express');
const ProductController = require('../controllers/ProductController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);

module.exports = router;