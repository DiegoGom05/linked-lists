class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }       
    }
    size() {
       return this.length;
    }
    head() {
        return this.head;
    }
    tail() {
        return this.tail;
    }
    at(index) {
        if(!this.head) return null;
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            if(i == index-1){
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
    }
    pop() {
        if(!this.head) return null;
        let currentNode = this.head;
        let secondToLast;
        for(let i = 0; i < linkedList.size(); i++){
            if(i == this.length-2){
                secondToLast = currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        secondToLast.nextNode = null;
        this.tail = secondToLast;
        console.log(secondToLast);
        this.length--;
        
    }
    contains(value) {
        if(!this.head) return null;
        let currentNode = this.head;
        for(let i = 0; i < linkedList.size(); i++){
            if(currentNode.value == value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
    find(value) {
        if(!this.head) return null;
        let currentNode = this.head;
        for(let i = 0; i < linkedList.size(); i++){
            if(currentNode.value == value){
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        return null;
    }
    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }
}
class Node {
    constructor(data){
        this.value =  data;
        this.nextNode =  null;
    }
}

(function main(){
    linkedList = new LinkedList;
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.pop();
    console.log(linkedList.contains(1));
    console.log(linkedList.at(4));
    console.log(linkedList.toString());
    console.log(linkedList);
})();