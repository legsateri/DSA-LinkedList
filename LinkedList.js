class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head
        if (!this.head) {
            return null
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }
        return currNode
    }

    remove(item) {
        if (!this.head) {
            return null
        }
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        let currNode = this.head
        let prevNode = this.head
        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        prevNode.next = cirrNode.next
    }

    insertBefore(nextNode, item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let currNode = this.head
            let prevNode = this.head
            while ((currNode !== null) && (currNode.value !== nextNode)) {
                prevNode = currNode
                currNode = currNode.next
            }
            prevNode.next = new _Node(item, currNode)
        }
    }

    insertAfter(prevNode, item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let currNode = this.head
            let prevNode = this.head
            while ((currNode !== null) && (currNode.value !== prevNode)) {
                prevNode = currNode
                currNode = currNode.next
            }
            if (currNode !== null) {
                console.log('Item not found on list')
                return
            }
            prevNode.next = new _Node(item, currNode)
        }
    }

    insertAt(index, item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        let currNode = this.head
        let prevNode = this.head
        let i = 0
        while (i !== index) {
            if (!currNode.next) {
                console.log('This index does not exist use insertLast to add to the end of the List')
                return
            }
            prevNode = currNode
            currNode = currNode.next
            i++
        }
        if (currNode === null) {
            console.log('Item not found on list (insertAt)')
            return
        }
        let pushedItem = prevNode
        let newItem = new _Node(item, prevNode.next)
        pushedItem.next = newItem
    }
}

function main() {
    let singlyList = new LinkedList()

    singlyList.insertFirst('Apollo Creed')
    singlyList.insertFirst('Boomer')
    singlyList.insertFirst('Rocky Balboa')
    singlyList.insertFirst('Husker');
    singlyList.insertFirst('Starbuck');
    singlyList.insertFirst('Tauhida');

    singlyList.remove('squirrel')
    singlyList.insertBefore('Apollo Creed', 'John')
    singlyList.insertAfter('Apollo Creed', 'Tom')
    singlyList.insertAt(9, 'Kimbo Slice')

    console.log(JSON.stringify(singlyList))

    display(singlyList)
    size(singlyList)
    isEmpty(singlyList)
    findPrevious(singlyList)
    findLast(singlyList)
    middleList(singlyList)
}

main()

function display(list) {
    if (list.head) {
        console.log(list.head.value)
    } else {
        console.log('Empty List')
        return
    }
}

function size(list) {
    let currNode = list.head
    let i = 0
    while (currNode.next !== null) {
        currNode = currNode.next
        i++
    }
    console.log(i)
    return i
}

function isEmpty(list) {
    if (list.head) {
        console.log('false')
    } else {
        console.log('true')
    }
}

function findPrevious(list, key) {
    if (!list.head) {
        return
    }
    let currNode = list.head
    let prevNode = list.head
    while (currNode.value !== key) {
        prevNode = currNode
        currNode = currNode.next
    }
    console.log(prevNode.value)
    return prevNode.value
}

function findLast(list) {
    if (!list.head) {
        return
    }
    let currNode = list.head
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    console.log(currNode.value)
    return currNode.value
}

// This program will parse the values in the list and remove dupes
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) { // 1
        let newNode = current;
        while (newNode.next !== null) { // 1 
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

function reverse(list) {
    if (!list.head) {
        return
    }
    let currNode = list.head
    let i = 0
    while (currNode.next !== null) {
        currNode = currNode.next
        i++
    }
    console.log(list)
    return currNode.value
}

const findThirdFromEnd = list => {
    if (!list.head) {
        return console.log('This List has no items')
    }
    let listLength = showListSize(list)
    if (listLength <= 2) {
        return console.log('This list does not have that many items')
    }
    let counter = 0
    let targetIndex = listLength - 3
    let currentNode = list.head
    while (counter < targetIndex && currentNode !== null) {
        currentNode = currentNode.next
        counter++
    }
    console.log(currentNode.value)
}

function middleList(list) {
    let mid = size(list) / 2
    mid = Math.round(mid)
    let currNode = list.head
    let prevNode = list.head
    let i = 0
    while (i !== mid) {
        if (!currNode.next) {
            return
        }
        prevNode = currNode
        currNode = currNode.next
        i++
    }
    if (currNode === null) {
        return
    }
    let middle = prevNode
    return console.log(list.find(middle.value))
}

function cycleList(sll) {
    let currNode = sll.head
    let seen = []
    while (currNode) {
        seen.push(currNode)
        currNode = currNode.next
        console.log(seen)
        if (seen.includes(currNode.next)) {
            return true
        }
    }
    return false
}

const sortList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let prev = null
    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        prev = slow
        slow = slow.next
    }
    prev.next = null
    const l1 = sortList(head)
    const l2 = sortList(slow)
    return ChannelMergerNode(l1, l2)
}