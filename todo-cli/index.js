const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");

//Create a new Todo
const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Second task",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID : ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

//Count the number of tasks
const countTodo = async () => {
  try {
    const todoCount = await Todo.count();
    console.log(`Found ${todoCount} tasks`);
  } catch (error) {
    console.error(error);
  }
};

//Retieve the list of tasks
const retriveTodo = async () => {
  try {
    const todos = await Todo.findAll();
    const todoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};

//Retieve the SIngle task
const retriveSingleTodo = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: false,
      },
      order: [["id", "DESC"]],
    });
    const todoList = todo.displayableString();
    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};

//Update the task
const updateTask = async (id) => {
  try {
    await Todo.update(
      { completed: true },
      {
        where: {
          id: id,
        },
      },
    );
  } catch (error) {
    console.error(error);
  }
};

//Delete the task
const deleteTask = async (id) => {
  try {
    const dlt = await Todo.destroy({
      where: {
        id: id,
      },
    });
    console.log(`Deleted ${dlt} task`);
  } catch (error) {
    console.error(error);
  }
};

// Here the Asyncronus nature of JS comes into play
// retriveTodo();
// countTodo();

(async () => {
  await createTodo();
  await countTodo();
  await retriveTodo();
  await retriveSingleTodo();
  await updateTask(2);
  await retriveTodo();
  await deleteTask(2);
  await retriveTodo();
})();
