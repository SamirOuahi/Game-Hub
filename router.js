// Express nous fournis une fonction Router qui nous permet de créer des routes
const { Router } = require("express");
const homeController = require("./controllers/home");
const gameController = require("./controllers/game");

// Je créer un router
const router = Router();

// Tous ce que je faisais avec app, je peux le faire avec router
router.get("/", homeController.homepage);

// router.get('/game/fourchette', gameController.showFourchette);

// router.get('/game/diceRoller', gameController.showDiceRoller);

// Je créer une route paramétrée
// :gameName est un paramètre dynamique qui peut prendre n'importe quelle valeur
router.get("/game/:gameName", gameController.showGame);
router.get("/search", gameController.searchGame);
// Je met à disposition de ceux qui le demande le router
module.exports = router;
