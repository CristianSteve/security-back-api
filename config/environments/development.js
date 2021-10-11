module.exports = {
    PORT : process.env.PORT || 3306,
    DB : {
        username : process.env.USER || "root",
        password : process.env.PASS || "toor",
        database : process.env.DB || "iot",
        host : process.env.HOST || "localhost",
        dialect : process.env.DIALECT || "mysql"
    }
}