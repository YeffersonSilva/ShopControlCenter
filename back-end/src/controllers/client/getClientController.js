const Clients = require('../../models/Clients');

/// Get client by ID
exports.getClient = async (req, res, next) => {
    try {
      const client = await Clients.findById(req.params.id);
      if (!client) {
        res.json({ message: "Client not found" });
        return next();
      }
      res.json(client);
    } catch (error) {
      console.log(error);
      next();
    }
  };