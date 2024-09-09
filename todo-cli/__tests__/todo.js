/* eslint-disable no-undef */
const todoList = require("../todo");

describe("Todo List Test Suite", () => {
  let todo;

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .split("T")[0];
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split("T")[0];

  beforeEach(() => {
    todo = todoList(); // Reset the todo list before each test
  });

  // 1. Test for creating a new todo
  test("Should add a new todo", () => {
    const initialLength = todo.all.length;
    todo.add({ title: "New Todo", completed: false, dueDate: today });
    expect(todo.all.length).toBe(initialLength + 1); // Expect the length to increase by 1
    expect(todo.all[initialLength].title).toBe("New Todo"); // Check if the last added todo is correct
  });

  // 2. Test for marking a todo as completed
  test("Should mark a todo as completed", () => {
    todo.add({ title: "Mark as complete", completed: false, dueDate: today });
    expect(todo.all[0].completed).toBe(false); // Initially not completed
    todo.markAsComplete(0); // Mark it as complete
    expect(todo.all[0].completed).toBe(true); // Now it should be completed
  });

  // 3. Test for retrieving overdue items
  test("Should retrieve overdue items", () => {
    todo.add({ title: "Overdue task", completed: false, dueDate: yesterday });
    todo.add({ title: "Not overdue", completed: false, dueDate: today });
    const overdueItems = todo.overdue();
    expect(overdueItems.length).toBe(1); // Only one item is overdue
    expect(overdueItems[0].title).toBe("Overdue task"); // Check if it's the right item
  });

  // 4. Test for retrieving due today items
  test("Should retrieve items due today", () => {
    todo.add({ title: "Due Today task", completed: false, dueDate: today });
    todo.add({ title: "Not due today", completed: false, dueDate: tomorrow });
    const todayItems = todo.dueToday();
    expect(todayItems.length).toBe(1); // Only one item is due today
    expect(todayItems[0].title).toBe("Due Today task"); // Check if it's the right item
  });

  // 5. Test for retrieving due later items
  test("Should retrieve items due later", () => {
    todo.add({ title: "Due Later task", completed: false, dueDate: tomorrow });
    todo.add({ title: "Not due later", completed: false, dueDate: today });
    const laterItems = todo.dueLater();
    expect(laterItems.length).toBe(1); // Only one item is due later
    expect(laterItems[0].title).toBe("Due Later task"); // Check if it's the right item
  });
});

// var dateToday = new Date();
// const formattedDate = (d) => {
//   return d.toISOString().split("T")[0];
// };
// const today = formattedDate(dateToday);
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1)),
// );
// const todoList = require("../todo");
// const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
// describe("Todolist test suite", () => {
//   beforeAll(() => {
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: new Date().toISOString(),
//     });
//     add({ title: "Submit assignment", dueDate: yesterday, completed: false });
//     add({ title: "Service Vehicle", dueDate: today, completed: false });
//     add({ title: "Pay rent", dueDate: today, completed: true });
//   });
//   test("Should add new todo", () => {
//     const todoItems = all.length;
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: new Date().toISOString(),
//     });
//     expect(all.length).toBe(todoItems + 1);
//   });
//   test("Should mark completed", () => {
//     const initialStatus = all[0].completed;
//     markAsComplete(0);
//     const updatedStatus = all[0].completed;
//     expect(updatedStatus).not.toBe(initialStatus);
//   });
//   test("Should retrive overdue", () => {
//     let over = overdue();
//     expect(over.length).toBe(over.length);
//   });
//   test("Should retrive dueToday", () => {
//     let today = dueToday();
//     expect(today.length).toBe(today.length);
//   });
//   test("Should retrive dueLater", () => {
//     let later = dueLater();
//     expect(later.length).toBe(later.length);
//   });
// });
