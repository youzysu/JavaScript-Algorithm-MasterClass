## There are so many Data Structures

- Binary Search Trees, Queues, Singly Linked Lists, Undirected Unweighted Graphs, Binary Heaps, Directed Graphs, Hash Tables, Doubly Linked Lists, Stacks, …

## What Do Data Structures Do?

- Data Structures are …
  - **collections of values**
  - **the relationships** among them
  - the functions or operations that can be applied to the data

## Why so many???

- Different data structures excel at different things.
- Some are highly specialized, while others (like arrays) are more generally used.
- They store data, but their behavior, the relationships between the data and their functionality, the methods we get to act upon them are very different.

## Why care?

- There is NO ONE BEST data structure
  - They **all excel** in **different** situations
- For examples
  - Working with map/location data → use a Graph
  - Need an ordered list with fast inserts/removals at the beginning and end → Use a Linked List
  - Web scraping nested HTML → Use a tree
  - Need to write a scheduler → Use a binary heap

## ES6 JS Class Syntax

### Objectives

- Explain what a class is
- How JS implements the idea of classes
- Define terms like abstraction, encapsulation, polymorphism
- Use classes to implement data structures

### What is a class

- A blueprint for creating objects **with pre-defined properties and methods**
- primarily syntactical sugar over JS’s existing **prototype-based inheritance**
  - not a new object-oriented inheritance model

### Why to learn

- class로 자료 구조를 구현 → 개별 자료 구조를 instance로 만들 수 있음

### Syntax

```
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
}
```

- constructor(props): The method to create new objects
  - assign props to the individual object

```
let firstStudent = new Student("Colt", "steele")
let secondStudent = new Student("Blue", "steele")
```

- to create a new instance using the new keyword
  - instantiate objects from a class
- Instance Methods
  - ex. fullName()
- Class Methods - static
  - Each instance와는 무관하게 Class 단위에서 호출
- ‘this’ keyword inside constructor and instance methods → refers to the instance

### Recap

- What is Class? blueprints that when created make instances
- Classes are created with the new keyword
- What is constructor() ? Constructor function gets run when the class is instantiated
- **Instance methods**: similar to methods in objects, be added to classes
- **Class methods**: be added using the static keyword
