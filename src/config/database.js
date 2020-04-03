module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'admin',
  password: 'amor123M',
  database: 'gobarber',
  define: {
    timestamp: true,
    // UNDERSCORED => PADRONIZACAO DE NOMENCLATURA DE TAB E COLUNA UNDERSCORED
    underscored: true,
    underscoredAll: true,
  },
};
