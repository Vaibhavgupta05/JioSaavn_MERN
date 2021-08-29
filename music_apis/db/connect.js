const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rocco121:ghpsvv123@cluster0.dt9o8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true },
{poolSize:5}, (err=>{
    if(err){
        console.log('Problem in DB Connection');
    }
    else{
        console.log('DB Connection Created....');
    }
}));
module.exports = mongoose;