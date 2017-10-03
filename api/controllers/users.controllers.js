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

// Gets by id one user from database and sends it in json format.
module.exports.usersGetOne = function (req, res) {
    var userId = req.params.userId;

    User
        .findById(userId)
        .exec()
        .then(function (user) {
            var response = {
                status: 200,
                message: user
            };
            if (!user) {
                response.status = 404;
                response.message = {
                    "message": "User ID is not found"
                };
            }
            return res
                .status(response.status)
                .json(response.message);
        })
        .catch(function (err) {
            console.log('Error finding user');
            res
                .status(500)
                .json(err);
        });
};

// Update in database datas from one user by id.
module.exports.userUpdateOne = function(req, res){
    var userId = req.params.userId;

    User
        .update(
            {_id: userId},
            {
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                mail: req.body.mail
            },
            function(err, user) {
                if(err) {
                    res.send(err)
                }
                res.send(user)
            });
};