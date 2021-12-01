class Nodo{
    constructor(dato, siguiente){
       this.dato = dato;
       this.siguiente = siguiente;
    };
};

class LinkedList{
    constructor(){
        this.inicio = null;
        this.tamaño = 0;
    };

    agregar(dato){
        let nuevoNodo = new Nodo(dato, null);
        if (!this.inicio) {
            this.inicio = nuevoNodo;
        }else{
            let actual = this.inicio;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
        this.tamaño++;
    };

    Eliminar(dato){
        let actual = this.inicio;
        let Previo =  null;

        while (actual != null) {
            if (actual.dato === dato) {
                if (!Previo) {
                    this.inicio = actual.siguiente;
                }else{
                    Previo.siguiente = actual.siguiente;
                }
                this.tamaño --;
                return actual.dato;
            }
            Previo = actual;
            actual = actual.siguiente;
        }
        return null;
    };

    buscar(V){
        var actual = this.inicio;
        var Z = false;
        while(actual){
            if (actual.dato == V) {
                Z = true
            }
            actual = actual.siguiente
        }
        return console.log(Z);
    };
}
var P = 0;
const Lista = new LinkedList();
console.log("Antes de implementar los datos en la cola: ");
console.log(Lista);

console.time("Tiempo del programa");
for (let i = 0 ; i < 10000 ; i++){
 Lista.agregar(Math.floor(Math.random() * (1 + 10000 - 1) + 1));
P++;
}
console.timeEnd("Tiempo del programa");
console.log("Los numero de pasos que realizo el algoritmo fue: "+ P);
console.log("Después de implementar los datos en la cola: ");
console.log(Lista);