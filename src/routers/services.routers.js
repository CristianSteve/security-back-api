const Router = require("express");

module.exports = function({ ServicioController }){
    const router = Router();

    router.get("/", ServicioController.getServicio.bind(ServicioController));
    //router.post("/", MarcaController.createMarca.bind(MarcaController));
    
    return router;
}