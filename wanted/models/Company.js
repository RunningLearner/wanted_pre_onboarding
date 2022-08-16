import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Company extends Model {}
  Company.init(
    {
        company_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        companyname: {
            type: DataTypes.STRING,
        },
        nationality: {
            type: DataTypes.STRING,
        },
        region: {
            type: DataTypes.STRING,
        },
    },
    {
      sequelize,
      modelName: "Company",
      tableName: "company",
    }
  );
  return Company;
};