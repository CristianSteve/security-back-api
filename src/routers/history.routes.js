const Router = require("express");

module.exports = function({ HistoryController }){
    const router = Router();

    console.log("entro a royter")

    router.get("/", HistoryController.getHistory.bind(HistoryController));
    router.post("/", HistoryController.createHistory.bind(HistoryController));
    
    return router;
}