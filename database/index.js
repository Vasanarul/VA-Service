const {Sequelize, Model, Datatypes} = require('sequelize');

var sequelize = new Sequelize('mysql', 'root', 'baseball', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Video extends Model {}
Video.init ({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  video_url: Sequelize.STRING,
  bannerID: Sequelize.INTEGER
}, {sequelize, modelName: 'video'});

class Banner extends Model {}
Banner.init ({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  amount_pledged: Sequelize.INTEGER,
  goal: Sequelize.STRING,
  backers: Sequelize.INTEGER,
  backers_text: Sequelize.STRING,
  days: Sequelize.INTEGER,
  days_text: Sequelize.STRING,
  all_or_nothing: Sequelize.BOOLEAN,
  location: Sequelize. STRING,
  project_we_love: Sequelize.BOOLEAN
}, {sequelize, modelName: 'banner'});

sequelize.sync();


module.exports.sequelize = sequelize;