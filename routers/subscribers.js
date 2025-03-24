const express = require("express");
const subscribersController = require("../controllers/subscribersController");
const router = express.Router();

router.get("/", subscribersController.getAll);

//# subscribersController.getSubscriber is a middleware to link request with id
// request.subscriber = subscriberGotFromDB
router.get(
  "/:id",
  subscribersController.getSubscriber,
  subscribersController.getById
);
router.post("/", subscribersController.create);

router.patch(
  "/:id",
  subscribersController.getSubscriber,
  subscribersController.update
);
router.delete(
  "/:id",
  subscribersController.getSubscriber,
  subscribersController.remove
);
module.exports = router;
