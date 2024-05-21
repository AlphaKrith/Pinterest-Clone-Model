//1:-How can I perform case sensitive search in Mongoose?
//2:-How do I find documents where an array field contains all of set of values?
//3:-How can I search for documents with a specific data range in Mongoose?
//4:-How can I filter documents based on the exixtence of a field in mongoose?
//5:-How can I filter documents based on a specific field's length in mongoose?


const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testinendgame2");

const userSchema=mongoose.Schema({
  username: String,
  nickname: String,
  descriptoin: String,
  categories: {
    type: Array,
    default: []
  },
  datecreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports= mongoose.model("user",userSchema)