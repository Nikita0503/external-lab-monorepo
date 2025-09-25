import DataTypes from "sequelize";
import sequelize from "../db";

const Task = sequelize.define("task", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  done: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING },
});

const File = sequelize.define("file", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  image: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Task, { onDelete: "CASCADE" });
Task.belongsTo(User);

Task.hasMany(File, { onDelete: "CASCADE" });
File.belongsTo(Task);

export { File, Task, User };
