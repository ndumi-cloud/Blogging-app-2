const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
    title: {
        type:String,
        required: true,
        unique: false
    },
    description: {
        type:String,
        required: false,
       
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
        required: false
    }
   
},
{timestamps: true}
)
module.exports = mongoose.model("Post", PostSchema)