import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      try {
        user = await User.create({ email });
        return res.status(201).json(user);
      } catch (err) {
        return res.status(400).json({ err });
      }
    } else {
      return res.status(200).json(user);
    }
  }
}

export default new UserController();
