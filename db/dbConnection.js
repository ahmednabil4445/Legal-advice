// const mongoose = require('mongoose');
// const connectDB =  (uri) => {
//     return mongoose.connect(uri);
// }

// module.exports = connectDB;
const mongoose=require('mongoose')
mongoose.set('strictQuery', false);

exports.dbConnection=()=>{
    mongoose.connect(process.env.URI).then(()=>{
        console.log("db Connection");
    }).catch((err)=>{
        console.log(err);
    })
}