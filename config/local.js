/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system: for example, this would be a good place
 * to store database or email passwords that apply only to you, and shouldn't
 * be shared with others in your organization.
 *
 * These settings take precedence over all other config files, including those
 * in the env/ subfolder.
 *
 * PLEASE NOTE:
 *		local.js is included in your .gitignore, so if you're using git
 *		as a version control solution for your Sails app, keep in mind that
 *		this file won't be committed to your repository!
 *
 *		Good news is, that means you can specify configuration for your local
 *		machine in this file without inadvertently committing personal information
 *		(like database passwords) to the repo.  Plus, this prevents other members
 *		of your team from commiting their local configuration changes on top of yours.
 *
 *    In a production environment, you probably want to leave this file out
 *    entirely and leave all your settings in env/production.js
 *
 *
 * For more information, check out:
 * http://sailsjs.org/#!/documentation/anatomy/myApp/config/local.js.html
 */

module.exports = {

  // The full base url at which your site will be primarily available.
  // Include an http:// prefix
  // ex. 'http://my-site.com'
  appUrl: 'https://okami-release-server.referral-ai.com',

  auth: {
    // Provide a set of credentials that can be used to access the admin interface.
    static: {
      username: 'admin',
      password: 'dror!login!'
    },
    // You can also specify an ldap connection that can be used for authentication.
    //ldap: {
    //  usernameField: 'USERNAME_FIELD', // Key at which the username is stored
    //  server: {
    //    url: 'ldap://LDAP_SERVER_FQDN:389',
    //    bindDn: 'INSERT_LDAP_SERVICE_ACCOUNT_USERNAME_HERE',
    //    bindCredentials: 'INSERT_PASSWORD_HERE',
    //    searchBase: 'USER_SEARCH_SPACE', // ex: ou=Our Users,dc=companyname,dc=com
    //    searchFilter: '(USERNAME_FIELD={{username}})'
    //  }
    //}
  },

  jwt: {
    // Recommended: 63 random alpha-numeric characters for secret
    // Generate using: https://www.grc.com/passwords.htm
    token_secret: 'xyz789431Ytpa!dsaa'
  },

  connections: {
    // mongodb: {
      // adapter: 'sails-mongo',
      // url: "mongodb://acurerate_admin:goAcurerateMongodb1234@ohio-data-repo.acurerate.com:27017/electron_release_server_session?authSource=admin"
      // host: 'ohio-data-repo.acurerate.com',
      // user: 'acurerate_admin',
      // password: 'goAcurerateMongodb1234',
    // }
  },

  session: {
    // Recommended: 63 random alpha-numeric characters for secret
    // Generate using: https://www.grc.com/passwords.htm
    // secret: 'fdatuioq!fdsBBva',
    // database: 'electron_release_server_session',
    // host: '10.1.1.114',
    // user: 'acurerate_admin',
    // password: 'goAcurerateMongodb1234',
    // port: 27017,
    // url: "mongodb://acurerate_admin:goAcurerateMongodb1234@ohio-data-repo.acurerate.com:27017/electron_release_server_session?authSource=admin"
  },

  files: {
    // Folder must exist and user running the server must have adequate perms
    dirname: '/home/ubuntu/acurerate/electron-release-server/deployables',
    // Maximum allowed file size in bytes
    // Defaults to 500MB
    // maxBytes: 524288000
  },

  /***************************************************************************
   * Your SSL certificate and key, if you want to be able to serve HTTP      *
   * responses over https:// and/or use websockets over the wss:// protocol  *
   * (recommended for HTTP, strongly encouraged for WebSockets)              *
   *                                                                         *
   * In this example, we'll assume you created a folder in your project,     *
   * `config/ssl` and dumped your certificate/key files there:               *
   ***************************************************************************/

 ssl: {
     //ca: require('fs').readFileSync('/home/ubuntu/acurerate/outpost/ssl/domains/key.ca'),
     // key: require('fs').readFileSync('/home/ubuntu/acurerate/outpost/ssl/domains/key.pem'),
     // cert: require('fs').readFileSync('/home/ubuntu/acurerate/outpost/ssl/domains/key.pub'),
     // phrase: require('fs').readFileSync('/home/ubuntu/acurerate/outpost/ssl/domains/key.phrase')
     //for local dev (Maman)
     key: require('fs').readFileSync("/Users/matan-co/workspace/external-api-nodejs/ssl/domains/localhost.referral-ai.com/key.pem"),
     cert: require('fs').readFileSync('/Users/matan-co/workspace/external-api-nodejs/ssl/domains/localhost.referral-ai.com/server.crt'),
     phrase: require('fs').readFileSync('/Users/matan-co/workspace/external-api-nodejs/ssl/domains/localhost.referral-ai.com/passphrase')
   },

  /***************************************************************************
   * The `port` setting determines which TCP port your app will be           *
   * deployed on.                                                            *
   *                                                                         *
   * Ports are a transport-layer concept designed to allow many different    *
   * networking applications run at the same time on a single computer.      *
   * More about ports:                                                       *
   * http://en.wikipedia.org/wiki/Port_(computer_networking)                 *
   *                                                                         *
   * By default, if it's set, Sails uses the `PORT` environment variable.    *
   * Otherwise it falls back to port 1337.                                   *
   *                                                                         *
   * In env/production.js, you'll probably want to change this setting       *
   * to 80 (http://) or 443 (https://) if you have an SSL certificate        *
   ***************************************************************************/

  port: 8080
/**************************************************************************
   * app remains stable, performant, and scalable.                           *
   *                                                                         *
   * By default, Sails sets its environment using the `NODE_ENV` environment *
   * variable.  If NODE_ENV is not set, Sails will run in the                *
   * 'development' environment.                                              *
   ***************************************************************************/

  // environment: process.env.NODE_ENV || 'development'

};
