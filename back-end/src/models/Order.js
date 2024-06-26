const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    client: {
        type: Schema.ObjectId, 
        ref: 'Clients'
    }, 
    order: [{
        product: {
            type: Schema.ObjectId,
            ref: 'Products'
        }, 
        quantity: Number
    }],
    total: {
        type: Number
    }
});

module.exports = mongoose.model('Order', orderSchema);
