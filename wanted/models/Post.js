import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Post extends Model {}
  Post.init(
    {   
        post_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        company_id: {
            type: DataTypes.STRING,
        },
        position: {
            type: DataTypes.STRING,
        },
        reward: {
            type: DataTypes.NUMBER,
        },
        content: {
            type: DataTypes.STRING,
        },
        skill: {
            type: DataTypes.STRING,
        },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "post",
    }
  );
  return Post;
};