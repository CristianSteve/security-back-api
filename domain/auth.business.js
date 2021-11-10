const jwt = require("jsonwebtoken");

class Auth {
  constructor({ config }) {
    this._config = config;
  }

  async createToken(username) {
      try{
        return jwt.sign({ username }, this._config.TOKEN_SECRET,{expiresIn : 60 * 60});
      }catch(e){
        return {
            status: "409",
            codeError: "ATH010",
            description: "Error interno, intentelo mas tarde",
          };
      }
  }


  async verifyToken(req, res, next) {
    const token = req.header('tsec')
    try {
      const auth = jwt.verify(token, process.env.TOKEN_SECRET);
      if(!auth) res.json({error : "Code no valido"})
      next();
    } catch (e) {
      res.status(409).json(
       {
        status: "409",
        codeError: "ATH050",
        description: "Acceso denegado, token no valido para el usuario",
        expired : e.expiredAt
      });
    }
  }
}

module.exports = Auth;
