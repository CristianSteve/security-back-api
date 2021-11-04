const Router = require("express");

module.exports = function({ AreaController }){
    const router = Router();

    router.get("/", AreaController.getAll.bind(AreaController));
    
    return router;
}