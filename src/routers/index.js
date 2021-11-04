const express = require("express");
const Router = require("express");
const cors = require("cors");
const compression = require("compression");
const app = express();

module.exports = function({ HistoryRoutes, ComponentRoutes, UserRoutes, ConfiguracionRoutes, AreaRoutes, TipoComponenteRoutes}){
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors({ origin: true, credentials: true }))
        .use(app.use(express.json()))
        .use(compression());

    apiRoute.use("/history", HistoryRoutes);
    apiRoute.use("/component", ComponentRoutes);
    apiRoute.use("/user", UserRoutes);
    apiRoute.use("/configuracion", ConfiguracionRoutes);
    apiRoute.use("/area", AreaRoutes);
    apiRoute.use("/tipoComponente", TipoComponenteRoutes);
    router.use("/api", apiRoute);

    return router;
}