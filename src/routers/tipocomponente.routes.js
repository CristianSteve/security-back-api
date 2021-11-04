const Router = require("express");

module.exports = function({ TipoComponenteController }){
    const router = Router();

    router.get("/", TipoComponenteController.getAll.bind(TipoComponenteController));
    
    return router;
}