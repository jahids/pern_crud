const { sq } = require("../config/db");
const { DataTypes } = require("sequelize");


const User = sq.define('user', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
});
User.sync().then(() => {
    console.log("user Model synced");
});


module.exports = User;
