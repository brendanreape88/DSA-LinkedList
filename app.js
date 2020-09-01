const LinkedList = require("./LinkedList");

const ll = new LinkedList();
ll.insertAtHead("Apollo");
ll.insertAtHead("Boomer");
ll.insertAtHead("Helo");
ll.insertAtHead("Husker");
ll.insertAtHead("Starbuck");
ll.remove("Husker");

console.log(ll);
