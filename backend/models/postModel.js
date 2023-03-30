const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: { type: String, require: true },
    img: { type: String, require: true },
    discription: { type: String, require: true },
    rating: { type: Number, require: true },
    price: { type: Number, require: true },
});

const post = mongoose.model('post',postSchema);

module.exports={post}