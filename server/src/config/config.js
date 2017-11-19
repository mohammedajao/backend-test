module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_Name || 'users',
    user: process.env.DB_User || 'users',
    password: process.env.DB_PASS || 'users',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './users.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
