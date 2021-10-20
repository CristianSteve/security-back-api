const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const Startup = require("./startUp");
const Server = require("./server");
const SocketUp = require("./Socket");
const config = require("../config/environments");

//Routers
const Routes = require("./routers");
const HistoryRoutes = require("./routers/history.routes"); 
const ComponentRoutes = require("./routers/Component.routes"); 

//controllers
const { HistoryController, ComponentController  } = require("./controllers");

//services
const { HistoryService, ComponentService } = require("../services");

//business
const { HistoryBusiness, ComponentBusiness } = require("../domain/")

//repositories
const { HistoryRepository, ComponentRepository } = require("../dal/repositories");

//db
const db = require("../dal/models");

const container = createContainer();

container.
    register({
        app: asClass(Startup).singleton(),
        router : asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        socketIo: asClass(SocketUp).singleton(),
    })
    .register({
        HistoryRoutes : asFunction(HistoryRoutes).singleton(),
        HistoryController : asClass(HistoryController).singleton(),
        ComponentRoutes : asFunction(ComponentRoutes).singleton(),
        ComponentController : asClass(ComponentController).singleton()
    })
    .register({
        config : asValue(config),
    })
    .register({
        db : asValue(db),
    })
    .register({
        HistoryService: asClass(HistoryService).singleton(),
        ComponentService: asClass(ComponentService).singleton(),
      })
      .register({
        HistoryRepository: asClass(HistoryRepository).singleton(),
        ComponentRepository: asClass(ComponentRepository).singleton(),
      })
      .register({
        HistoryBusiness: asClass(HistoryBusiness).singleton(),
        ComponentBusiness: asClass(ComponentBusiness).singleton(),
      });

module.exports = container;