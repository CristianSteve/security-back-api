const Router = require("express");

module.exports = function({ ComponentController }){
    const router = Router();

    router.get("/:component", ComponentController.getComponents.bind(ComponentController));
    router.get("/", ComponentController.getAllComponents.bind(ComponentController));
    router.post("/", ComponentController.createComponent.bind(ComponentController));
    router.patch("/:id", ComponentController.modifyComponent.bind(ComponentController));
    
    return router;
}