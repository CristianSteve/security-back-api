const express = require("express");
const Router = require("express");
const cors = require("cors");
const compression = require("compression");
const app = express();

module.exports = function({ HistoryRoutes, ComponentRoutes, UserRoutes, ConfiguracionRoutes, CodeUserRoutes, AreaRoutes, TipoComponenteRoutes, Auth, AuthAPIRoutes, AccesoRoutes}){
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors({ origin: true, credentials: true }))
        .use(app.use(express.json()))
        .use(compression());

    apiRoute.use("/history", Auth.verifyToken, HistoryRoutes);
    apiRoute.use("/component", Auth.verifyToken, ComponentRoutes);
    apiRoute.use("/user", UserRoutes);
    apiRoute.use("/configuracion", Auth.verifyToken, ConfiguracionRoutes);
    apiRoute.use("/area", Auth.verifyToken, AreaRoutes);
    apiRoute.use("/tipoComponente", Auth.verifyToken, TipoComponenteRoutes);
    apiRoute.use("/acceso", Auth.verifyToken, AccesoRoutes);
    apiRoute.use("/auth", AuthAPIRoutes);
    apiRoute.use("/code", CodeUserRoutes);
    router.use("/api", apiRoute);

    return router;
}