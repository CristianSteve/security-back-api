const Router = require("express");

module.exports = function({ ConfiguracionController }){
    const router = Router();

    router.get("/", ConfiguracionController.getAll.bind(ConfiguracionController));
    
    return router;
}