
const Node = function(data){
    this.data=data;
    this.next=null;
}

const MyLinkedList=function(){
    this.data=null;  //because initially LL is empty;

}

MyLinkedList.prototype.addAtHead = function(data){
    if(this.head == null){ //if ll is empty;
        
this.head = new Node(data); 
    }else{
        let n = new Node(data);
        n.next = this.head; // the next property of newly created node will attached to the previous head;
        this.head = n;  //assigning head to newly created node;
    }
}

const ll = new MyLinkedList();

ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);

let curr = ll.head;
while(curr != null){
    console.log(curr.data);
    curr = curr.next;
}