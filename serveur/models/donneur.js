module.exports = (sequelize, DataTypes) => {
    const Donneur = sequelize.define("Donneur", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      
      },
      Nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Sexe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Confirm: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    CodePostal: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },  
    Poids: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    CIN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BloodType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    });

    return Donneur;
  };