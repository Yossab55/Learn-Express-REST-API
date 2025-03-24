const SubscribersModel = require("../models/subscribersModel");

async function getAll(request, response) {
  try {
    const subscribers = await SubscribersModel.find();
    response.json(subscribers);
  } catch (error) {
    response.status(500).end({ error: `got an server error: ${error}` });
  }
}
function getById(request, response) {
  response.send(response.subscriber);
}

async function create(request, response) {
  const { name, subscribeToChannel } = request.body;
  const subscriber = new SubscribersModel({
    name,
    subscribeToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    response.status(201).json({ newSubscriber });
  } catch (error) {
    response.status(400).json({ error: `put real data ${error}` });
  }
}
async function update(request, response) {
  const { name, subscribeToChannel } = request.body;
  if(name) {
    response.subscriber.name = name;
  }
  if(subscribeToChannel) {
    response.subscriber.subscribeToChannel = subscribeToChannel;
  }
  try {
    const updatedSubscriber = await response.subscriber.save();
    //! use status 204 if you don't want to send a response
    response.json(updatedSubscriber)
  } catch (error) {
    response.status(400).json({ error: `put real data ${error}` });
    
  }
}

async function remove(request, response) {
  try {
    await response.subscriber.deleteOne();
    response.json({ message: "subscriber was deleted" });
  } catch (error) {
    response
      .status(500)
      .send({ message: `server down with remove - ${error}` });
  }
}

async function getSubscriber(request, response, next) {
  let subscriber;
  try {
    subscriber = await SubscribersModel.findById(request.params.id);
    if (subscriber == null) {
      return response.status(404).json({ message: `wrong Id error` });
    }
  } catch (error) {
    return response.status(500).json({ massage: `server error ${error}` });
  }
  response.subscriber = subscriber;
  next();
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getSubscriber,
};
