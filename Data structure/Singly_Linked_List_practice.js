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
        return current
    }
    
    set(index, value) {
        const updatedNode = this.get(index)
        if (updatedNode) {
        updatedNode.value = value
        return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            this.push(value)
            return true
        }
        if (index === 0) {
            this.unshift(value)
            return true
        }

        const newNode = new Node(value)
        const prev = this.get(index - 1)
        const cur = prev.next
        prev.next = newNode
        newNode.next = cur
        this.length++
        return true
    }
}


// test
const list = new SinglyLinkedList()
list.push("0")
list.push("1")
list.push("2") // 왜 길이가 두번 더해지지?
list.insert(3, "3")
console.log(list)