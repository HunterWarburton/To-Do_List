// Define a class for each to-do list item
class ToDoItem {
  constructor(text) {
    this.text = text;
    this.isCompleted = false;
  }
}

// Define a class for the to-do list
class ToDoList {
  constructor() {
    this.items = [];
  }

  // Method to add a new to-do list item
  addItem(text) {
    const item = new ToDoItem(text);
    this.items.push(item);
  }

  // Method to remove an existing to-do list item
  removeItem(index) {
    this.items.splice(index, 1);
  }

  // Method to rename an existing to-do list item
  renameItem(index, text) {
    this.items[index].text = text;
  }

  // Method to mark a to-do list item as completed
  markAsCompleted(index) {
    this.items[index].isCompleted = true;
  }

  // Method to get the number of complete and incomplete to-do list items
  getStatus() {
    let complete = 0;
    let incomplete = 0;
    this.items.forEach((item) => {
      if (item.isCompleted) {
        complete++;
      } else {
        incomplete++;
      }
    });
    return { complete, incomplete };
  }

  // Method to sort the to-do list items by completion status
  sortByCompletion() {
    this.items.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      } else if (!a.isCompleted && b.isCompleted) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}

// Create a new to-do list
const myToDoList = new ToDoList();

// Add some items to the list
myToDoList.addItem("Take out the trash");
myToDoList.addItem("Do the laundry");
myToDoList.addItem("Buy groceries");

// Mark the first item as completed
myToDoList.markAsCompleted(0);

// Get the number of complete and incomplete items
const status = myToDoList.getStatus();
console.log(`Complete: ${status.complete}, Incomplete: ${status.incomplete}`);

// Sort the list by completion status
myToDoList.sortByCompletion();

// Print the to-do list
myToDoList.items.forEach((item) => {
  console.log(`- ${item.text} (${item.isCompleted ? "Completed" : "Incomplete"})`);
});
