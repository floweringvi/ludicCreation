const mongoose = require('mongoose');

const { Scehma } = mongoose;

const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Scehma({
    username: {
        type: String,
        required: true, 
        trim: true
    },
    email:{
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
        minLength: 6
    }, 
    orders: [Order.schema]
});

userSchema.pre('save', async function(next) {
    if(this.isNew) {
        const cycles = 10;
        this.password = await bcrypt.hash(this.password, cycles)
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;