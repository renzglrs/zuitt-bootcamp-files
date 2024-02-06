let collection = [];

// Write the queue functions below.
// Do not use built-in Array Methods.

let firstIndex = 0;
let lastIndex = 0;

function print(){
    return collection;
}

function enqueue(item){
    collection[lastIndex] = item;
    lastIndex++;
    return collection;
}

function dequeue(){
    const [firstElement, ...restOfArray] = collection;
    collection = restOfArray;
    lastIndex--;
    return collection;
}

function front(){
    const firstItem = collection[firstIndex];
    return firstItem;
}

function size(){
    const size = lastIndex - firstIndex;
    return size;
}

function isEmpty() {
    return firstIndex === lastIndex;
}

// console.log(print(collection));
// console.log(enqueue('John'));
// console.log(enqueue("Jane"));
// console.log(dequeue());
// console.log(enqueue("Bob"));
// console.log(enqueue("Cherry"));
// console.log(front());
// console.log(size());
// console.log(dequeue());
// console.log(dequeue());
// console.log(dequeue());
// console.log(isEmpty());

module.exports = {
    collection,
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};