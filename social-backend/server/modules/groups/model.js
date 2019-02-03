import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [6, 'Name must be greater than 6 characters'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Name must be greater than 10 characters'],
  },
  eventDate: {
    type: Date,
  },
  category: {
    type: String,
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup',
  }],
}, { timestamps: true });

export default mongoose.model('Group', GroupSchema);
