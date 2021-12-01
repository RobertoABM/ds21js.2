/*
create one file by program
implement a method, function, non-function solution
solve each as requested
may use code from previous exercises
 
PROBLEM 1
contains(v)

look up for value v in the linked list
@arg {type} v - value; may be of chars, numbers, u objects
@returns {bool} - true of false, if value v exist or not
may use traverse

@example
contains(3)
*/

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

let List = new LinkedList();
console.log(List);
List.agregar(10);
List.agregar(5);
List.buscar(10);
List.Eliminar(10);
List.buscar(10);
console.log(List);