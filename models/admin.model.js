const { sq } = require("../config/db");
const { DataTypes } = require("sequelize");


const Admin = sq.define('admin', {
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.STRING,
        defaultValue: "18"
    }
});

Admin.sync({ force: true }).then(() => {
    console.log("Admin Model synced");
});


// // module.exports = Admin;
// const { sq } = require("../config/db");
// const { DataTypes, Model } = require("sequelize");


// class Admin extends Model { }

// Admin.init({
//     // Model attributes are defined here
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING
//         // allowNull defaults to true
//     }
// }, {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: 'Admin' // We need to choose the model name
// });

// Admin.sync({ force: true }).then(() => {
//     console.log("Admin Model synced");
// });

// module.exports = Admin
