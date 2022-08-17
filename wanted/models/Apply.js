import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Apply extends Model {}
  Apply.init(
    {
    }, {
      sequelize,
      modelName: "Apply",
      tableName: "apply",
      timestamps: false,
    }
    );
    return Apply;
  };
  