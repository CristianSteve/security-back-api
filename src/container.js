const { asClass, createContainer, asFunction, asValue } = require("awilix");

//App start
const Startup = require("./startUp");
const Server = require("./server");
const SocketUp = require("./Socket");
const Auth = require("./../domain/auth.business");
const config = require("../config/environments");
const Email = require("./notification/email");

//Routers
const Routes = require("./routers");
const HistoryRoutes = require("./routers/history.routes"); 
const ComponentRoutes = require("./routers/Component.routes"); 
const UserRoutes = require("./routers/user.routes"); 
const ConfiguracionRoutes = require("./routers/configuracion.routes"); 
const AreaRoutes = require("./routers/area.routes"); 
const TipoComponenteRoutes = require("./routers/tipocomponente.routes"); 
const AuthAPIRoutes = require("./routers/authAPI.routes"); 
const AccesoRoutes = require("./routers/acceso.routes"); 
const CodeUserRoutes = require("./routers/codeUser.routes"); 

//controllers
const { HistoryController, ComponentController, UserController, ConfiguracionController, TipoComponenteController, CodeUserController, AreaController, AuthController, AccesoController  } = require("./controllers");

//services
const { HistoryService, ComponentService, UserService, ConfiguracionService, CodeUserService, AreaService, TipoComponenteService, AccesoService } = require("../services");

//business
const { HistoryBusiness, ComponentBusiness, UserBusiness, ConfiguracionBusiness, CodeUserBusiness, AreaBusiness, TipoComponenteBusiness, AccesoBusiness } = require("../domain/")

//repositories
const { HistoryRepository, ComponentRepository, UserRepository, ConfiguracionRepository, CodeUserRepository, AreaRepository, TipoComponenteRepository, AccesoRepository } = require("../dal/repositories");

//db
const db = require("../dal/models");

const container = createContainer();
SocketUp
container.
    register({
        app: asClass(Startup).singleton(),
        router : asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        socketIo: asClass(SocketUp).singleton(),
        Auth: asClass(Auth).singleton(),
        Email: asClass(Email).singleton(),
    })
    .register({
        HistoryRoutes : asFunction(HistoryRoutes).singleton(),
        HistoryController : asClass(HistoryController).singleton(),
        ComponentRoutes : asFunction(ComponentRoutes).singleton(),
        ComponentController : asClass(ComponentController).singleton(),
        UserRoutes : asFunction(UserRoutes).singleton(),
        UserController : asClass(UserController).singleton(),
        ConfiguracionRoutes : asFunction(ConfiguracionRoutes).singleton(),
        ConfiguracionController : asClass(ConfiguracionController).singleton(),
        AreaRoutes : asFunction(AreaRoutes).singleton(),
        AreaController : asClass(AreaController).singleton(),
        TipoComponenteRoutes : asFunction(TipoComponenteRoutes).singleton(),
        TipoComponenteController : asClass(TipoComponenteController).singleton(),
        AuthAPIRoutes : asFunction(AuthAPIRoutes).singleton(),
        AuthController : asClass(AuthController).singleton(),
        AccesoRoutes : asFunction(AccesoRoutes).singleton(),
        AccesoController : asClass(AccesoController).singleton(),
        CodeUserRoutes : asFunction(CodeUserRoutes).singleton(),
        CodeUserController : asClass(CodeUserController).singleton(),
        
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
        UserService: asClass(UserService).singleton(),
        ConfiguracionService: asClass(ConfiguracionService).singleton(),
        AreaService: asClass(AreaService).singleton(),
        TipoComponenteService: asClass(TipoComponenteService).singleton(),
        AccesoService: asClass(AccesoService).singleton(),
        CodeUserService: asClass(CodeUserService).singleton(),
      })
      .register({
        HistoryRepository: asClass(HistoryRepository).singleton(),
        ComponentRepository: asClass(ComponentRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
        ConfiguracionRepository: asClass(ConfiguracionRepository).singleton(),
        AreaRepository: asClass(AreaRepository).singleton(),
        TipoComponenteRepository: asClass(TipoComponenteRepository).singleton(),
        CodeUserRepository: asClass(CodeUserRepository).singleton(),
        AccesoRepository: asClass(AccesoRepository).singleton(),
        CodeUserRepository: asClass(CodeUserRepository).singleton(),
      })
      .register({
        HistoryBusiness: asClass(HistoryBusiness).singleton(),
        ComponentBusiness: asClass(ComponentBusiness).singleton(),
        UserBusiness: asClass(UserBusiness).singleton(),
        ConfiguracionBusiness: asClass(ConfiguracionBusiness).singleton(),
        AreaBusiness: asClass(AreaBusiness).singleton(),
        TipoComponenteBusiness: asClass(TipoComponenteBusiness).singleton(),
        AccesoBusiness: asClass(AccesoBusiness).singleton(),
        CodeUserBusiness: asClass(CodeUserBusiness).singleton(),
      });

module.exports = container;