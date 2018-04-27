var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    list:{
        type: String,
        enum: ["TO DO", "DOING", "DONE"]
    }

});
