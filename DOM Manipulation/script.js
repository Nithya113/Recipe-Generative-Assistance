const heading = document.querySelector('.main-heading');


// styling 
heading.style.color = 'red';

// const list = document.querySelectorAll('.list-items');

//setting styling

// for (let i = 0; i < list.length; i++) {
//     list[i].style.color = 'blue';
//     console.log(list[i]);
// }

// insert or add 
const add = document.querySelector('ul');
const insert = document.createElement('li');

add.append(insert);

insert.innerText = 'Apple';


// attributes  methods- add, del, get
//insert.setAttribute('class', 'list-items');
// insert.removeAttribute('class');
// console.log(heading.getAttribute('class'));

insert.classList.add('list-items');