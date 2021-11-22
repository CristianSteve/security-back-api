const Router = require("express");

module.exports = function({ ConfiguracionController }){
    const router = Router();

    router.get("/", ConfiguracionController.getAll.bind(ConfiguracionController));
    router.post("/", ConfiguracionController.createConfUser.bind(ConfiguracionController));
    router.get("/:id", ConfiguracionController.getConfUser.bind(ConfiguracionController));
    router.patch("/:id", ConfiguracionController.getUpConf.bind(ConfiguracionController));
    
    return router;
}