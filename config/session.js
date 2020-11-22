/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.session.html
 */

module.exports.session = {
  secret: 'm9qxmeYudf0yqn8qZjRV08yXjeZQThi3jTrnFJuZNFSvNwnwWo0h29Gia376dDo',
  url: 'mongodb://acurerate_admin:goAcurerateMongodb1234@ohio-data-repo.acurerate.com:27017/electron_release_server?authSource=admin'
};
  // session: {
  //   // Recommended: 63 random alpha-numeric characters for secret
  //   // Generate using: https://www.grc.com/passwords.htm
  //   secret: 'SESSION_SECRET',
  //   database: 'SESSION_DATABASE_NAME',
  //   host: 'DATABASE_HOST',
  //   user: 'DATABASE_USERNAME',
  //   password: 'DATABASE_PASSWORD',
  //   port: 5432
  // }
