import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    spot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spot',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Booking', BookingSchema);
