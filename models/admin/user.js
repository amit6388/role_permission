const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Import Schema from mongoose

const UserSchema = new Schema({ 
  name:  String,
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    permissionId: {    
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    } 
}); 

module.exports = mongoose.model('User', UserSchema);
