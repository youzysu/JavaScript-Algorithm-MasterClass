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

}