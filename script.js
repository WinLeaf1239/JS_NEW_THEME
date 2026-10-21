let main = document.getElementById('main');
let text = document.getElementsByClassName('text')
let button = document.getElementsByTagName('button')


// console.log(main)
// console.log(text)
// console.log(button)

let div = document.querySelector('div');
let text2 = document.querySelectorAll('.text')



// console.log(div)
// console.log(text2)

let f = main.innerHTML;
let t = main.innerText;
let s = main.textContent;

// console.log(f);
// console.log(t);
// console.log(s);

let newElement = document.createElement('p');
newElement.textContent = 'new element';
main.append(newElement);

newElement.classList.add('newClass')

newElement.style.background = 'red';

newElement.classList.remove('newClass')

newElement.setAttribute('id' , 'newtext');

let textArray = Array.from(text);


textArray.map(text=> {
    text.style.color = 'red';
})

textArray.forEach(text=>{
    text.style.color = 'blue';
})

console.log(textArray);