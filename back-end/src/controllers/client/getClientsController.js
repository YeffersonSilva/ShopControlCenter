const Clients = require('../../models/Clients');

exports.getClients = async (req, res, next) => {
  try {
    const clients = await Clients.find({});
    res.json(clients);
  } catch (error) {
    console.log(error);
    next();
  }
};
