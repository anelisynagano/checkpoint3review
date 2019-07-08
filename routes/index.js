const express = require('express');
const router = express.Router();
const { createIngredient, showIngredients, deleteIngredient } = require("../controllers/ingredients")

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Wild Code School' });
})

router.get('/ingredients/new', (req, res, next) => {
  res.render('ingredient-new');
})

router.post('/ingredients/new', createIngredient);

router.get('/ingredients', showIngredients);

router.get('/ingredient/:id/delete', deleteIngredient)

module.exports = router;
