const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
    title: {
        type:String,
        required: true,
        unique: true
    },
    description: {
        type:String,
        required: true,
       
    },
    photo: {
        type:String,
        required: false,
       
    },
    username:{
        type: String,
        default: ","
    },
    categories:{
        type: Array,
        required: true
    }
   
},
{timestamps: true}
)
module.exports = mongoose.model("Post", PostSchema)