const mongoose = require('mongoose');

const Post = mongoose.model('Post',{
    title:{type:String},
    content:{type:String},
    username:{type:String},
    date:{
                type: Date,
                default: Date.now
            },
   
});

module.exports = Post;

// var schema = mongoose.Schema;

// const userSchema = new schema({
//     name: {
//         type: String
//     },
//     title:{
//         type: String
//     },
//     content:{
//         type: String
//     },
//     date:{
//         type: Date,
//         default: Date.now
//     },
//     image:{
//         type: String
//     }
// })
// module.exports = mongoose.model('User' , userSchema);