const mongoose  = require("mongoose")


 exports.connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log('✅ MongoDB connected');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
      process.exit(1); // optional: fail fast
    }
  };

