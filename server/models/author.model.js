const mongoose=require('mongoose');

const AuthorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        minlength:[3,"El nombre tiene que tener más de 3 caracteres"]
    }
},{timestamps:true});

module.exports.Author = mongoose.model('Author',AuthorSchema);