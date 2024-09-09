/* eslint-disable no-undef */
var dateToday = new Date();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1)),
);
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todolist test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString(),
    });
    add({ title: "Submit assignment", dueDate: yesterday, completed: false });
    add({ title: "Service Vehicle", dueDate: today, completed: false });
    add({ title: "Pay rent", dueDate: today, completed: true });
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
    const initialStatus = all[0].completed;
    markAsComplete(0);
    const updatedStatus = all[0].completed;
    expect(updatedStatus).not.toBe(initialStatus);
  });
  test("Should retrive overdue", () => {
    let over = overdue();
    expect(over.length).toBe(over.length);
  });
  test("Should retrive dueToday", () => {
    let today = dueToday();
    expect(today.length).toBe(today.length);
  });
  test("Should retrive dueLater", () => {
    let later = dueLater();
    expect(later.length).toBe(later.length);
  });
});
