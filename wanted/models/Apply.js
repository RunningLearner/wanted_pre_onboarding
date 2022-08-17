import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Apply extends Model {}
  Apply.init(
    {
        apply_id :{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        }
    }, {
      sequelize,
      modelName: "Apply",
      tableName: "apply",
    }
  );
  return Apply;
};