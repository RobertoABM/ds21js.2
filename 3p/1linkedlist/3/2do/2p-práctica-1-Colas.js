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
var P = 0;
const queue = new Queue();
console.log("Antes de implementar los datos en la cola: ");
console.log(queue);

console.time("Tiempo del programa");
for (let i = 0 ; i < 10000 ; i++){
queue.enqueue(Math.floor(Math.random() * (1 + 10000 - 1) + 1));
P++
}
console.timeEnd("Tiempo del programa");

console.log("Los numero de pasos que realizo el algoritmo fue: "+ P);
console.log("Después de implementar los datos en la cola: ");
console.log(queue);