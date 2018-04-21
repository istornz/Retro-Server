// Imports
var express      = require('express');
var usersCtrl    = require('./routes/usersCtrl');
var messagesCtrl = require('./routes/messagesCtrl');
var likesCtrl    = require('./routes/likesCtrl');

// Router
exports.router = (function() {
  var apiRouter = express.Router();

  // Users routes
  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
  apiRouter.route('/users/me/').put(usersCtrl.updateUserProfile);

  // Messages routes
  apiRouter.route('/messages/new/').post(messagesCtrl.createMessage);
  apiRouter.route('/messages/').get(messagesCtrl.listMessages);

  // Likes
  apiRouter.route('/messages/:messageId/vote/like').post(likesCtrl.likePost);
  apiRouter.route('/messages/:messageId/vote/dislike').post(likesCtrl.dislikePost);

  return apiRouter;
})();