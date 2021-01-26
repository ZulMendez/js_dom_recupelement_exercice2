// 1
let myBody = document.body
console.log(myBody);

// 2
let firstChild = myBody.firstElementChild;
console.log(firstChild);

// 3
let lastChild = myBody.lastElementChild;
console.log(lastChild);

// 4
let exo4 = document.getElementsByTagName('div')[0];
let children = exo4.children;
console.log(children);

// 5
let liste = document.getElementsByTagName('li')[0];
let nextSibling = liste.nextElementSibling;
console.log(nextSibling);

// 6
let liste2 = document.getElementsByTagName('li')[1];
let preSibling = liste2.previousElementSibling;
console.log(preSibling);