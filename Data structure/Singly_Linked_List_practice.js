class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    //push method
    push(value) {
        let newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    //pop method
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
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return cur
    }

}


// test
let list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push('3')
list.push('4')
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
console.log(list)