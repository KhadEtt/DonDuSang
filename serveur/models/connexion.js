module.exports = (sequelize, DataTypes) => {
    const Connexion = sequelize.define("Connexion", {
      
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Connexion;
  };