'use strict';

// Development specific configuration
// ==================================
module.exports = {

 // Sequelize connecton opions
  sequelize: {   
    user:'root',
    password:'root',
    options: {
      logging: false,      
      define: {
        timestamps: false
      }
    }
  }

};


 