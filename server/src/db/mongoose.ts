import mongoose from 'mongoose';

const mongoUri = 'mongodb+srv://yelpcamp:oluwafaby@cluster0-ozwro.mongodb.net/eco-dock?retryWrites=true&w=majority' || '';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
