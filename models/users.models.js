import { DataTypes } from "sequelize";
import sequelize from "../db/connectionDb.js";


import bcrypt from "bcryptjs/dist/bcrypt.js";

import jwt from "jsonwebtoken";

const User = sequelize.define("User", {
 name: {
 type: DataTypes.STRING,
 allowNull: false,
 },

 email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    },
   

 password: {
 type: DataTypes.STRING,
 allowNull: false,
 },
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 8);
});
   
export default User;


