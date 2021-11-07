const mapper = require("automapper-js");

class AuthController {
  constructor({ UserService }) {
    this._userService = UserService;
    this._mapper = mapper;
  }

  async authUser(req, res){
    const { username, password } = req.body;
    let auth = await this._userService.authUser(username, password);
    if(auth?.status === "409")
      return res.status(auth.status).json({auth})
    else
      return res.json({data : {username, auth}})
  }
} 

module.exports = AuthController;
