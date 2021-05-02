const express = require('express');
const router = express.Router();

const pokedexController = require('./controllers/pokedexController');

router.get('/api/lists', pokedexController.getAllPokemon);
router.get('/api/:id', pokedexController.getOnePokemon);
router.get('/api/type-by-pokemon/:id', pokedexController.getTypesByPokemon);
router.get('/api/pokemon-by-type/:id', pokedexController.getPokemonsByTypes);
router.get('/api/type/:id', pokedexController.getOneType);

router.use((req, res, next) => {
    res.status(404).send('Page non trouvée');
});


module.exports = router;