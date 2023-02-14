const mongoose=require("mongoose");

const Dbconnect=()=>{
    return mongoose.connect("mongodb+srv://Vivekkhade:k@cluster0.vdzwl6o.mongodb.net/vowel?retryWrites=true&w=majority");
}

module.exports=Dbconnect;