/**
 * Created by web on 17/7/18.
 */
var Settings = require('./settings');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var db = new Db(
    Settings.DB,
    new Server(
        Settings.HOST,
        Settings.PORT,
        {
            auto_reconnect:true,
            native_parser: true
        }
    ),
    {safe: true}
);
module.exports = db;