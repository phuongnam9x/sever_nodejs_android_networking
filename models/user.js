const mongose = require('mongoose');

const UserSchema = new mongose.Schema({
    full_name:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    user_name:{
        type: String,
        require: true,
    },
    role_id:{
        type: Number,
        require: true,
    },
});

const User = mongose.model ('User', UserSchema);
module.exports = User;