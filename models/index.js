import Sequelize from 'sequelize';

const sequelize = new Sequelize('slack', 'ivanwarke', '', {
  dialect: 'postgres',
  underscored: true,
});

const models = {
  User: sequelize.import('./user.model'),
  Channel: sequelize.import('./channel.model'),
  Message: sequelize.import('./message.model'),
  Team: sequelize.import('./team.model'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;