const mapper = require("automapper-js");

class AuthController {
  constructor({ UserService }) {
    this._userService = UserService;
    this._mapper = mapper;
  }

  async authUser(req, res){
    const { username, password } = req.body;
    const data = await this._userService.authUser(username, password);
    if(data?.status === "409")
      return res.status(data.status).json({data})
    else
      return res.json({data :  data})
  }
} 

module.exports = AuthController;
