class _Node {
     constructor(value, next) {
          this.value = value; this.next = next; }
        }
            

class LList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    insertBefore(newItem, beforeItem) {
        if (this.head === null) {
          this.insertFirst(newItem)
          return
        }
        let currNode = this.head
        let prevNode = this.head
        while (currNode !== null && currNode.value !== beforeItem) {
          prevNode = currNode
          currNode = currNode.next
        }
        if (currNode === null) {
          this.insertLast(newItem)
          return
        }
        const tempNode = new _Node(newItem, currNode)
        prevNode.next = tempNode
      }
      insertAfter(newItem, afterItem) {
        if (this.head === null) {
          this.insertFirst(newItem)
          return
        }
        let currNode = this.find(afterItem)
        if (currNode === null) {
          this.insertLast(newItem)
          return
        }
        const tempNode = new _Node(newItem, currNode.next)
        currNode.next = tempNode
      }
      insertAt(item, position) {
        if (this.head === null) {
          this.insertFirst(item)
          return
        }
        let currNode = this.head
        let currPosition = 1
        while (currPosition < position - 1) {
          currNode = currNode.next
          currPosition++
        }
        const tempNode = new _Node(item, currNode.next)
        currNode.next = tempNode
      }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.valueue !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.valueue === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.valueue !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    const SLL = new LList()
    

    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');


} 

main();

