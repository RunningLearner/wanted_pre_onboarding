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

company.hasMany(post, { foreignKey: "company_id", targetKey: "company_id" });
post.belongsTo(company, {
  foreignKey: { name: "company_id", allowNull: false },
  targetKey: "company_id",
  onDelete: "CASCADE",
});

user.belongsToMany(post, {
  through: apply,
  foreignKey: "user_id",
  otherKey: "post_id",
});
post.belongsToMany(user, {
  through: apply,
  foreignKey: "post_id",
  otherKey: "user_id",
});
