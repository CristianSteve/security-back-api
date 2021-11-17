const Router = require("express");

module.exports = function({ UserController }){
    const router = Router();

    router.get("/", UserController.getAll.bind(UserController));
    router.post("/code", UserController.codeUser.bind(UserController));
    
    return router;
}