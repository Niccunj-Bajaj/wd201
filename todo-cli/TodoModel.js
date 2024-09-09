//First Method

// const { DataTypes } = require("sequelize");
// const { sequelize } = require("./connectDB.js");

// const Todo = sequelize.define(
//   "Todo",
//   {
//     // Model attributes are defined here
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     dueDate: {
//       type: DataTypes.DATEONLY,
//     },
//     complete: {
//       type: DataTypes.BOOLEAN,
//     },
//   },
//   {
//     tableName: "todos",
//   }
// );
// module.exports = Todo;
// Todo.sync(); // create the table

//Second Method

const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class Todo extends Model {
  // Static method
  static async addTask(params) {
    return await Todo.create(params);
  }

  //instance Method
  displayableString() {
    return `${this.completed ? "[x]" : "[ ]"} ${this.id}. ${this.title} - ${this.dueDate}`;
  }
}

Todo.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  },
);

Todo.sync();
module.exports = Todo;
