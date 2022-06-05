module.exports = (sequelize, DataTypes) => {
    const Register = sequelize.define("Register", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confirm: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    CodePostal: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },  
    poids: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    cin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bloodtype: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    });
  
    return Register;
  };