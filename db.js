const mongoose = require('mongoose')
const uri = "mongodb+srv://erdeneochir:Erdene6207@cluster0.sfewaib.mongodb.net/?retryWrites=true&w=majority";
exports.connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Database is successfully connected,');
    } catch (error) {
        console.log(error);
    }
}