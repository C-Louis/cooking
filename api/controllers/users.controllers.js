// Requires mongoose into the file.
var mongoose = require('mongoose');

// To use native promises
mongoose.Promise = global.Promise;

// Mongoose schema for Recipe model
var User = mongoose.model('User');

/* METHODS */

/**
 * Gets all users from database and sends them in json format.
 * @param req
 * @param res
 */
module.exports.usersGetAll = function (req, res) {
    User
        .find()
        .exec()
        .then(function (users) {
            if(users) {
                return res.json(users)
            }
        })
        .catch(function (err) {
            return res
                .status(500)
                .json(err)
        });
};
