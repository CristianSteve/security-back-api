const Router = require("express");

module.exports = function({ CodeUserController, Auth }){
    const router = Router();

    router.get("/:code", CodeUserController.validateCode.bind(CodeUserController));
    router.post("/", Auth.verifyToken, CodeUserController.codeUser.bind(CodeUserController));
    
    return router;
}