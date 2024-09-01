const mongoose  = require("mongoose")


mongoose.connect('mongodb+srv://hassan:hassan123@cluster0.1uazb.mongodb.net/dev').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});


