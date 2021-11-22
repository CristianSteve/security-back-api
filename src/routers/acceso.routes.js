const Router = require("express");

module.exports = function({ AccesoController }){
    const router = Router();

    router.get("/", AccesoController.getAll.bind(AccesoController));
    router.patch("/:id", AccesoController.modifyAcceso.bind(AccesoController));
    
    return router;
}