const Clients = require('../../models/Clients');


exports.addClient = async (req, res, next) => {
    const client = new Clients(req.body);
  
    try {
      await client.save();
      res.json({ message: "New client added" });
    } catch (error) {
      console.log(error);
      next();
    }
  };