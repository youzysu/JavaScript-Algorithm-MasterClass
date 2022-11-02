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
        console.log(cur)
        return cur
    }
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
    get(index) {
        if (index < 0 || index >= this.length) return null
        let current = this.head
        let count = 0
        while (count !== index) {
            current = current.next
            count++
        }
        console.log(current)
        return current
    }
    set(index, value) {
        const updatedNode = list.get(index)
        if (!updatedNode) return false
        updatedNode.value = value
        return true
    }
}


// test
const list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.get(1)
list.set(1, "changed")
console.log(list.set(1))
console.log(list)