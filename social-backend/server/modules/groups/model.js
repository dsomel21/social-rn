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
  socials: [{
    type: Schema.Types.ObjectId,
    ref: 'Social',
  }],
}, { timestamps: true });

GroupSchema.statics.addSocial = async function (id, args) {
  const Social = mongoose.model('Social');

  const group = await this.findById(id);
  console.log(group);

  // Copy everything from args
  const social = await new Social({ ...args, group });

  group.socials.push(social);
};

export default mongoose.model('Group', GroupSchema);
