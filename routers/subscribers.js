const express = require("express");
const subscribersController = require("../controllers/subscribersController");
const subscribersModel = require("../models/subscribersModel");

const router = express.Router();

router.get("/", subscribersController.getAll)
router.get("/:id", subscribersController.getById)
router.post("/", (request, response) => {

})
router.patch("/:id", (request, response) => {

})
router.delete("/:id", (request, response) => {

})
module.exports = router