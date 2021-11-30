const mapper = require("automapper-js");

class AuthController {
  constructor({ UserService }) {
    this._userService = UserService;
    this._mapper = mapper;
  }

  async authUser(req, res){
    const { username, password, only } = req.body;
    const data = await this._userService.authUser(username, password);
    if(data?.status === "409"){
      return res.status(data.status).json({data})
    }else{
      if(only)
        return res.send(data.token);
        //return res.json({token : data.token})
      else
        return res.json({data})
    }
  }
} 

module.exports = AuthController;
