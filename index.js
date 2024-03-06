class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    }

    add(data) {
        let element = this.head;
        while (element.next) {
            element = element.next;
        }

        element.next = new ListNode(data);

        return this;
    }

    pop() {
        let node = this.head;
        while (node.next.next) {
            node = node.next;
        }

        const deletedNode = node.next;
        node.next = null;

        return new LinkedList(deletedNode);
    }

    delete(index) {
        let node = this.head;
        let i = 0;

        while (node.next && i < index - 1) {
            node = node.next;
            i++;
        }

        if (!node?.next?.next) {
            node.next = null;
            return;
        }

        node.next = node.next.next;
    }

    insertAt(index, value) {
        let node = this.head;
        let i = 0;

        while (node.next && i < index - 1) {
            node = node.next;
            i++;
        }

        if (!node?.next?.next) {
            return;
        }
        const movedNode = node.next;
        node.next = value;
        node.next.next = movedNode;
    }

    count() {
        let node = this.head;
        let i = 1;

        while (node.next) {
            i++;
            node = node.next;
        }

        return i;
    }

    find(value) {
        let element = this.head;

        while (element) {
            if (element.data === value) {
                return new LinkedList(element);
            }

            element = element.next;
        }

        return null;
    }

    displayList() {
        let node = this.head;
        let str = '';

        while (node) {
            str += node.data + ' -> ';
            node = node.next;
        }

        str += ' NULL';
        console.log(str);
    }
}

const node1 = new ListNode(1);
const linkedList = new LinkedList(node1);

linkedList.add(4).add(5).add(100).add(102).add(103).add(105).add(106).add(42);
linkedList.displayList();
linkedList.pop();
linkedList.delete(5);
linkedList.delete(5);
linkedList.insertAt(2, new ListNode(99));
linkedList.displayList();

console.log(linkedList.count());

const node2 = linkedList.find(100);
const newLinkedList = new LinkedList(node2?.head);

newLinkedList.displayList();

