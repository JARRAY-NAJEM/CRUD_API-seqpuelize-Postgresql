module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      firstName: {
        type: Sequelize.STRING,
       allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter your firstName'
            }
          }
      },
      lastName: {
        type: Sequelize.STRING,
         allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter your lastName'
            }
          }
      },
      Email: {
        type: Sequelize.STRING,
       allowNull: false,
        unique: true,
        isEmail: true,
        validate: {
            notNull: {
              msg: 'Please enter your Email'
            }
          }
        
      },
      password: {
        type: Sequelize.STRING,
         allowNull: false,
        // validate: {
        //     is: /^[0-9a-z]{64}$/i
        //   },
          notNull: {
            msg: 'Please enter your password'
          }
      },

    });
  
    return User;
  };
  