const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();
describe("Todolist test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString(),
    });
  });
  test("Should add new todo", () => {
    const todoItems = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString(),
    });
    expect(all.length).toBe(todoItems + 1);
  });
  test("Should mark completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
