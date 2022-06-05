module.exports = (sequelize, DataTypes) => {
    const RendezVouss = sequelize.define("RendezVouss", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      centre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      CIN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return RendezVouss;
  };