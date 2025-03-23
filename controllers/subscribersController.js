const subscribersModel = require("../models/subscribersModel");

function getAll(request, response) {
  response.send("hello world")
}
function getById(request, response) {

}


module.exports = {
  getAll,
  getById
}