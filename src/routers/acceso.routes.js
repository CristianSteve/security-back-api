const Router = require("express");

module.exports = function({ AccesoController }){
    const router = Router();

    router.get("/action/:id", AccesoController.getAction.bind(AccesoController));
    router.get("/", AccesoController.getAll.bind(AccesoController));
    router.get("/component", AccesoController.getAccessitems.bind(AccesoController));
    router.patch("/:id", AccesoController.modifyAcceso.bind(AccesoController));

    
    
    return router;
}