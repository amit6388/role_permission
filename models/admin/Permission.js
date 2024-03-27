const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema({ 
      name: {
            type: Map,
            of: Boolean
        }
}); 
module.exports = mongoose.model('Permission',permissionSchema);



 