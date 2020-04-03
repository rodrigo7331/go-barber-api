import User from '../models/User';


class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const user = await User.create(req.body);
    // create() não está retornando valores default da table, tive que usar reload --a documenação fala que ele retorna-- https://sequelize.org/master/manual/model-instances.html
    const { name, email, provider } = await user.reload();

    return res.json({ name, email, provider });
  }
}


export default new UserController();
