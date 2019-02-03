import mongoose, { Schema } from 'mongoose';

const SocialSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
  },
}, { timestamps: true });

export default mongoose.model('Social', SocialSchema);
