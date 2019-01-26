import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/social');
  mongoose.connection
    .once('open', () => { console.log('MongoDB Running'); })
    .on('error', err => { console.log(err); })
}