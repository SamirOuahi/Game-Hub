// Mes fichiers de controller ne serviront qu'à contenir les fonctions à exécuter pour chaque route
const homeController = {
  homepage(req, res) {
    res.render("index");
  },
};

module.exports = homeController;
