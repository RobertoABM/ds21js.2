// PROBLEM 1
// Queue implementation (array-based)

class Queue{
    constructor(){
        this.Items = {};
        this.Front = 0;
        this.End = 0;
    };

    enqueue(data){
        this.Items[this.End] = data;
        this.End++;
    };
    
    dequeue(){
        if (this.Front === this.End) {
            return null;
        };

        const Data = this.Items[this.Front];
        delete this.Items[this.Front];
        this.Front++;
        return Data;
    };

    getSize(){
        return this.end - this.Front;
    };

    isEmpty(){
        if (this.getSize() === 0) {
            return true;
        } else {
            return false;
        };
    };

    peek(){
        if (this.getSize() === 0) {
            return true;
        };
        return this.Items[this.Front];
    };

    print(){
        if (this.getSize() === 0) {
            return true;
        };

        let Result = ' ';
        for (let i = this.Front; i < this.End; i++) {
            Result += this.Items[i] + ' ';            
        };
        return Result;
    };
};

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue);

console.log(queue.print());