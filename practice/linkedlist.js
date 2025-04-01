class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    List_Insert(key){
        let newNode = new Node(key);
        newNode.next = this.head;
        this.head = newNode;
    }

    List_Traverse(){
        let current=this.head;
        const keys = [];
       
        while (current !== null) {
            keys.push(current.key);
            current = current.next;
        }
       
        if (keys.length === 0) {
            console.log("List is empty");
        } else {
            console.log("List contents:", keys.join(" -> "));
        }
    }

    List_Delete(){
        if (this.head === null) {
            console.log("Cannot delete from empty list");
            return;
        }
       
        const deletedKey = this.head.key;
        this.head = this.head.next;
        console.log("Deleted node with key:", deletedKey);
    }
}

const list = new LinkedList();

list.List_Traverse();
list.List_Insert(5);
list.List_Insert(7);
list.List_Insert(8);
list.List_Insert(3);
list.List_Insert(2);
list.List_Traverse();
list.List_Delete();

list.List_Traverse();