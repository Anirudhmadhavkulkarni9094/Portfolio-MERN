const mongoose = require('mongoose');


const FeedbackSchema = new mongoose.Schema({
    name: {
        type:  String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    }
})

const Feedback = new mongoose.model('feedback', FeedbackSchema);

module.exports = Feedback