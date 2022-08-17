import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      timestamps: false
    }
  );
  return User;
};