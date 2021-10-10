const Router = require("express");

module.exports = function({ HistoryController }){
    const router = Router();

    router.get("/", HistoryController.getHistory.bind(HistoryController));
    router.post("/", HistoryController.createHistory.bind(HistoryController));
    
    return router;
}