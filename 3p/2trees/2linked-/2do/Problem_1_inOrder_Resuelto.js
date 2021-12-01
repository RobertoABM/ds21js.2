/*INSTRUCTIONS
 
 create one file by program
 implement a method, function, non-function solution
 solve each as requested
 may use code from previous exercises
 
 
 PROBLEM 1
 inorder(n)

 traverses a tree in INORDER
 @arg {tree} n - tree

 @example
 inorder(root)
*/

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree{
    constructor(data){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if (newNode.data < node.data) {
            if (node.left === null){
            node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if (node.right === null){
                node.right = newNode;
                }else{
                    this.insertNode(node.right, newNode);
                }
        }
    };

    inOrder(node){
        if (node !== null ) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    };    
};

const BST = new BinarySearchTree();
BST.insert(40);
BST.insert(11);
BST.insert(24);
BST.insert(60);
BST.insert(50);
console.log(BST);
BST.inOrder(BST.root);