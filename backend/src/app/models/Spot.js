import mongoose from 'mongoose';

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

export default mongoose.model('Spot', SpotSchema);
