const express = require("express");
const Router = require("express");
const cors = require("cors");
const compression = require("compression");
const app = express();

module.exports = function({ HistoryRoutes, ComponentRoutes, UserRoutes, ConfiguracionRoutes, AreaRoutes, TipoComponenteRoutes, Auth, AuthAPIRoutes}){
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
    apiRoute.use("/auth", AuthAPIRoutes);
    router.use("/api", apiRoute);

    return router;
}