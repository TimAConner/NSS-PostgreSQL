'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'beaches',
  });
  Beach.associate = function(models) {

    // Sends the foreign key to the object with 'belong to'
    Beach.belongsToMany(models.Lifeguard, {               
      through: {
        model: 'LifeguardBeaches',
        unique: false,
      },
      foreign_key: 'fk_lifeguard',
    });
  };
  return Beach;
};