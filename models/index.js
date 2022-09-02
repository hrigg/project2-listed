module.exports = {
    House: require('./House'),
    Realtor: require('./Realtor')
}
mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
