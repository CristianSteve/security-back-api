const Router = require("express");

module.exports = function({ AuthController }){
    const router = Router();

    router.post("/v1/createAuth", AuthController.authUser.bind(AuthController));   
    
    return router;
}