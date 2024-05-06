const Node =function(data){
    this.data=data;
    this.next=null;
}

const MyLinkedList = function(){
    this.head=null; //initially ll is empty;
}

MyLinkedList.prototype.addAtTail= function(data){
    if(this.head == null){
        //ll is empty;
        this.head = new Node(data);
    }else{

// we are adding the new node at the head of ll so we should point the next property of node at the end
 let temp = this.head;

 while(temp.next !=null){
    temp = temp.next;
 }
 

        let n= new Node(data);
        temp.next = n; 
        

    }
}
let ll = new MyLinkedList();

ll.addAtTail(5);
ll.addAtTail(4);
ll.addAtTail(3);

let curr = ll.head;

while(curr !=null){
    console.log(curr.data);
    curr= curr.next;
}