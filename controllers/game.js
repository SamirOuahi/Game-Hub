const games = require("../games.json");

const gameController = {
  showFourchette(req, res) {
    res.render("fourchette");
  },
  showDiceRoller(req, res) {
    res.render("diceRoller");
  },
  showGame(req, res, next) {
    const { gameName } = req.params;

    // Pour gérer la 404, il faut se poser la question :
    // Est-ce que le paramètre gameName correspond à un jeu dans mon fichier games.json ?
    const gameFound = games.find((game) => game.name === gameName);

    // Si j'ai trouvé le jeu, je rend la vue du jeu
    if (gameFound) {
      res.render(gameName);
    } else {
      next();
    }
  },
  searchGame(req, res) {
    // Je récupère le texte recherché par l'utilisateur grâce au query params
    // Pour les récupérer il faut utiliser req.query
    // le searchText viens de l'attribut name de l'input de recherche
    // Je ne vais pas tenir compte de la casse pour facilité la recherche
    // `?.` est un opérateur optionnel, si req.query.searchText n'existe pas, searchText vaudra undefined et n'essayera pas d'appeler la méthode toLowerCase
    // Si `req.query.searchText?.toLowerCase()` retourne une valeur fausse (falsy), alors je prends la valeur après le `||`
    const searchText = req.query.searchText?.toLowerCase() || "";

    // Je filtre les jeux dont le nom contient le texte rechercher
    const gamesFiltered = games.filter((game) =>
      game.title.toLowerCase().includes(searchText)
    );

    res.render("search", {
      gamesFiltered,
    });
  },
};

module.exports = gameController;
