import Booking from '../models/Booking';

class BookingController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    try {
      const booking = await Booking.create({
        date,
        user: user_id,
        spot: spot_id,
      });

      await booking
        .populate('spot', 'company')
        .populate('user', 'email')
        .execPopulate();

      return res.status(201).json(booking);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new BookingController();
