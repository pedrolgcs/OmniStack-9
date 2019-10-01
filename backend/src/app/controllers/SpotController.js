// import Spot from '../models/Spot';

class SpotController {
  async store(req, res) {
    console.log(req.body);
    console.log(req.file);
    return res.json({ ok: true });
  }
}

export default new SpotController();
