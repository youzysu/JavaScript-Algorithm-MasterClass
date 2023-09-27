# Singly Linked Lists

## Objectives

- Define what a Singly Linked List
- Compare and contrast Linked List with Arrays
- Implement insertion, removal, traversal methods on SinglyLinkedLists

## What is a linked list

- Property
  1. head
  2. tail
  3. length
- Linked Lists consist of **nodes**
  - each node has a value
  - each node has a pointer to another node or null
- Linked List: a bunch of nodes pointing to other nodes

### Compariosons with Arrays

|                         | **List**                                                                                                                               | **Array**                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| index?                  | Do not have index                                                                                                                      | indexed in order                        |
| Insertion and deletion? | More convenient and easily<br><br>Connected via nodes with a next pointer<br><br>→ insertion and deletion을 위해 pointer만 바꿔주면 됨 | Insertion and deletion can be expensive |
| Random access?          | not allowed                                                                                                                            | quickly be accessed at a specific index |

## Implement Singly-Linked-List & Methods

### Node class 생성

```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
```

- Node property: value, pointer

### SinglyLinkedList class 생성

```
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
```

### Implement instance method of Singly Linked List

1. push
2. pop
3. shift
4. unshift
5. get
6. set
7. insert
8. remove
9. reverse

## Big O of SLL

- Insertion - O(1)
- Removal - SLL 길이에 따라 O(1) or O(N)
- Searching, Access - O(N)

삽입, 삭제, 임의 접근, 순서대로 데이터 관리할 때 적절한 자료구조 형태 → 데이터 삽입, 삭제 시간이 중요하고 임의의 데이터에 접근할 필요성이 없을 때

## Recap

- SLLs are an excellent alternative to arrays **when insertion and deletion at the beginning are frequently required**
- Array vs SLL
  - Array: contain a built in index
  - SLL: not contain
- The idea of **a list data structure that consists of nodes**
  - → other structures like Stacks and Queues

# pushing

- Adding a new node to the end of the Linked List
- pseudocode
  - This function should accept a value
  - Create a new node using the value passed to the function
  - If there is no head property on the list, set the head and tail to be the newly created node
  - Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  - Increment the length by one
  - Return the linked list

```
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
```

- head가 없으면(첫 node이면)
  - head를 newNode로 지정
  - node가 하나이므로 tail은 head과 같음
- node가 이미 있는 경우
  - 기존 tail의 next로 newNode 지정
  - 이제 tail은 새롭게 추가된 newNode
- node를 추가했으므로 length 1 증가
- newNode 추가된 list를 Return

Linked List 자료 구조에서 맨 끝에 data를 추가하고 싶다면?

1. 리스트의 마지막 항목이 새로운 마지막 항목을 가리키도록하고
2. 새로운 마지막 항목을 리스트의 마지막 항목으로 지정하기

```
let list = new SinglyLinkedList()
list.push("1")
console.log(list)
list.push("2")
console.log(list)
list.push('3')
console.log(list)
list.push('4')
console.log(list)
```

```
SinglyLinkedList {
  head: Node { value: '1', next: null },
  tail: Node { value: '1', next: null },
  length: 1
}
SinglyLinkedList {
  head: Node { value: '1', next: Node { value: '2', next: null } },
  tail: Node { value: '2', next: null },
  length: 2
}
SinglyLinkedList {
  head: Node { value: '1', next: Node { value: '2', next: [Node] } },
  tail: Node { value: '3', next: null },
  length: 3
}
SinglyLinkedList {
  head: Node { value: '1', next: Node { value: '2', next: [Node] } },
  tail: Node { value: '4', next: null },
  length: 4
}
```

# Popping

- Removing a node from the end of the Linked List

## Popping pseudocode

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the second to last node to be null
  - 왜 이걸 null로 만들어야하지?
    - 마지막 node와 연결고리를 자르는 것!
- Set the tail to be the second to last node
  - 이걸 tail로 설정
- Decrement the length of the list by 1
- Return the value of the node removed

### Trial

```
    pop() {
        let pre = this.head
        let temp = pre.next
        if (!pre) {
            return undefined
        }
        while (temp.next) {
            pre = pre.next
            temp = pre.next
        }
        let removed = temp.next
        temp.next = null
        temp = this.tail
        this.length--
        return removed
    }
```

```
// test
let list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push('3')
list.push('4')
list.pop()
console.log(list)

// console
SinglyLinkedList {
  head: Node { value: '1', next: Node { value: '2', next: [Node] } },
  tail: Node { value: '4', next: null },
  length: 3
}
```

### Refactored

one → two → three → four

cur

pre

```
    pop() {
        if(!this.head) return undefined
        let cur = this.head
        let pre = cur
        while (cur.next) {
            pre = cur
            cur = cur.next
        }
        this.tail = pre
        pre.next = null
        this.length--
        return cur
    }
```

```
let list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push('3')
list.push('4')

console.log(list.pop())
console.log(list)

// console
Node { value: '4', next: null }
SinglyLinkedList {
  head: Node { value: '1', next: Node { value: '2', next: [Node] } },
  tail: Node { value: '3', next: null },
  length: 3
}
```

# Shifting

- Removing a new node from the beginning of the Linked List

## Pseudo code

- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head’s next property
- Decrement the length by 1
- Return the value of the node romoved

### Trial

```
    shift() {
        if(!this.head) return undefined
        let shifted = this.head
        this.head = this.head.next
        this.length--;
        return shifted
    }
```

### Solution

```
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
```

### Refactored

```
    shift() {
        if(!this.head) return undefined
        let shifted = this.head
        this.head = this.head.next
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return shifted
    }
```

- Node가 하나밖에 없을 경우 length가 0이 되었을 때 tail도 null로 설정해주어야 함
- head는 이미 head.next가 Null 이므로 설정할 필요 없음

# Unshifting

- Adding a new node to the beginning of the Linked List

## Pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node’s next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list

### Trial

```
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
```

### Solution

```
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }
```

### Refactored

```
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
```

- this.head 가 없을 때 newNode.next는 없는 값이 되므로 else (this.head가 있을 때)를 해주어야 함

# Get

Retrieving a node by it’s position in the Linked List

- 처음 index 0부터 몇번 이동했는지 주어진 index만큼 반복될때까지 next를 통해 직접 이동해야 한다.

## Pseudocode

- This function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index

# Set

Changing the value of a node based on it’s position in the Linked List

## Pseudocode

- accept a value and an index
- Use get function to find the specific node
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true

# Insert

## Pseudocode

- If the index is
  - less than zero or greater than the length, return false
  - the same as the length, push a new node to the end of the list
  - 0, unshift a new node to the start of the list
- Otherwise, using the get method, access the node at the index -1
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next
- Increment the length
- Return true

# Remove
