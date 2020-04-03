import { Model, Sequelize } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      // DADOS QUE O USER PODE INFORMAR
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
      password_hash: Sequelize.STRING,
    },
    {
      sequelize,
    });
  }
}


export default User;
