'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          108.168.213.75,

  // Server port
  port:   process.env.OPENSHIFT_NODEJS_PORT ||
          process.env.PORT ||
          17685,

  sequelize: {   
    user:'cc',
    password:'CC-dvlpmnt',
    options: {
      logging: false,      
      define: {
        timestamps: false
      }
    }
  }
};
