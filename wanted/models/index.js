import Sequelize from "sequelize";

import User from "./user.js";
import Post from "./post.js";
import Company from "./Company.js";
import Apply from "./Apply.js";


export const sequelize = new Sequelize('wanted', 'user', 'pass', {
    dialect: 'sqlite',
    host: './db/dev.sqlite'
  });

export const user = User(sequelize, Sequelize.DataTypes);
export const post = Post(sequelize, Sequelize.DataTypes);
export const company = Company(sequelize, Sequelize.DataTypes);
export const apply = Apply(sequelize, Sequelize.DataTypes);


