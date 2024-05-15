const Clients = require('../../models/Clients');

exports.deleteClient = async (req, res, next) => {
    try {
        await Clients.findOneAndDelete({ _id: req.params.id });
        res.json({ message: "Client deleted" });
    } catch (error) {
        console.log(error);
        next();
    }
    };