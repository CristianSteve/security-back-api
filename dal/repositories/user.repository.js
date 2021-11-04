const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "User");
    this._db = db;
  }
}

module.exports = UserRepository;
