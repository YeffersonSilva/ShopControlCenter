const Clients = require('../../models/Clients');

exports.updateClient = async (req, res, next) => {
    try {
      const client = await Clients.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.json(client);
    } catch (error) {
      console.log(error);
      next();
    }
  };
  