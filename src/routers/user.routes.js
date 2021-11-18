const Router = require("express");

module.exports = function({ UserController, Auth }){
    const router = Router();

    router.get("/", Auth.verifyToken, UserController.getAll.bind(UserController));
    router.post("/", UserController.createUser.bind(UserController));
    router.post("/code", Auth.verifyToken, UserController.codeUser.bind(UserController));
    
    return router;
}