const mongoose = require('mongoose');

// mongoose.set('strictQuery', true);

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hrmproject'
        // , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     family: 4,
        // }
        );
        console.log('Connection to MongoDB successful');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

connectToDatabase();

module.exports = mongoose;
