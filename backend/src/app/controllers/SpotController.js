import Spot from '../models/Spot';
import User from '../models/User';

class SpotController {
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
  }

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ err: 'User not exists' });
    }

    try {
      const spot = await Spot.create({
        thumbnail: filename,
        company,
        techs: techs.split(',').map(tech => tech.trim()),
        price,
        user: user_id,
      });
      return res.json(spot);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new SpotController();
