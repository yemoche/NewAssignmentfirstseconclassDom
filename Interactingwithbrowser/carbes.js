// const para = document.querySelector('body > h1'); //body > h1 , means the body, the first h1 child

// console.log(para);

// To grab all the paragraph tags using querySelectorALL

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');// it selects all class with the error in any of the html tags

// // //using a forEach arrow function to print out the para graph

// // paras.forEach(para =>{
// //     console.log(para);
// // });

// // console.log(paras); //This generate a Node list, an array cannot be used on a node list
// // testing for element in the paras list
// // console.log(paras[0]); //it displays, <p>hello,World></p>

// console.log(paras[2]); //it displays, <p class="error">This is an error message</p>
// console.log(errors);

//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title); // it displays the page title and the tags

// //get Elements by their class name (for each function cannot be used for it)
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// // get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]); //display ceteris paribus

const para = document.querySelector('p');

// //console.log(para.innerText); //this is a property not a method, it gets us the innertext: it displays hello, world
// para.innerText = 'Nigeria is a beautiful Country';
// para.innerText += 'Nigeria is a beautiful Country'; //it displays hello world with Nigeria is a beautiful country on the same line

// const paras = document.querySelectorAll('p'); //whenever we have node, we can use for each function for them

// // paras.forEach(para =>{
// //     console.log(para.innerText);// it displays all the text in the paragraph tags
// //     para.innerText += 'add new name' //this adds (add new name to each paragrapgh tag texts)
// // });

// const content = document.querySelector('.content');

// //console.log(content.innerHTML);
// //content.innerHTML = '<h2>THIS A NEW H2</h2>'; //This over rides the content element
// //content.innerHTML += '<h2>THIS A NEW H2</h2>'; //This does not over ride the content element, a new element tag is created

// const people = ['mario ', 'luigi' , 'yoshi'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`; // a template to add names
// });

//Attribute - it works with href and a anchor tags

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

//changing an attribute and updating in the browser; set attribute

link.setAttribute('href','www.thenetninja.co.uk' );
link.innerText = 'TheNet Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success'); //This is used to change the default error above it to success

mssg.setAttribute('style', 'color: green;');






