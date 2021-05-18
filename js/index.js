// Your code goes here

// element selectors
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');
const home = document.querySelector('a');
const logo = document.querySelector('.logo-heading')
const container = document.querySelector('.container');
const h2 = document.querySelectorAll('h2');
const h4 = document.querySelectorAll('h4');
const div = document.querySelectorAll('div');
const body= document.querySelector('body');
const intro = document.querySelector('.intro');
const section = document.querySelector('section');
const headerImg = intro.querySelector('img');
const footer = document.querySelector('footer');
const footerpara = footer.querySelector('p');
const btn = document.querySelector('.btn');
// debugger



// create listeners for 10 types of events
// 1.mouseover
const colorScheme = ['#519872','#F6AE2D', '#086788', '#FE4A49'];

header.addEventListener('mouseover', (event)=>{
    logo.style.color = '#CE7B91';
    navLinks.forEach((link,index) =>{
        link.style.color = colorScheme[index];
        link.style.fontWeight = 'bold';
    })
})

// 2.keydown
document.addEventListener('keydown', event =>{
    // debugger
    if(event.key==='Escape'){
        alert('Are you sure to leave the Fun Bus page?')
    }
})

// 3.wheel
div.forEach(item =>{
    item.addEventListener('wheel', event =>{
        h2.forEach(each =>{
            each.style.color = '#8A4FFF';
        })
        h4.forEach(each =>{
            each.style.color = '#FF82A9';
        })
        })  
})

// 4.load
// window.addEventListener('load', event => alert('Are you ready for fun???'));

// 5.focus
// Remember only couple of elements are keyboard-focusable. eg. <a>, <button>, <input>, <select>...
// so if you add focus event to the footer, it won't trigger
home.addEventListener('focus', event =>{
    home.style.background = 'red';
    console.log('focusin btn');
    // debugger
});

// 6.click
header.addEventListener('click', event => {
    logo.style.fontSize = '5rem' ;
    logo.style.color = '#C879FF';
    navLinks.forEach(link =>{
        link.style.fontSize = '2rem';
    })
    //implement the animations
    gsap.from('header', {duration:1, y:'-100%', ease:'bounce'}) 
    gsap.from('.nav-link', {duration: 1, opacity: 0, delay: 1, stagger: .5})
});

// 7.mouseleave
header.addEventListener('mouseleave', event =>{
    logo.style.fontSize = '';
    logo.style.color = '#CE7B91';
    navLinks.forEach(link =>{
        link.style.fontSize = '';
    })
    // gsap.to('header',{}) //doesn/t work, nav still couldn't clickable
    // gsap.to('.nav-link', {})
})

// 8.dblclick
headerImg.addEventListener('dblclick', () =>{
    headerImg.setAttribute('src','https://pixnio.com/free-images/2017/05/10/2017-05-10-18-45-42.jpg');
})

headerImg.addEventListener('mouseleave', event =>{
    headerImg.setAttribute('src','fun-bus.927a34f2.jpg')

})

// 9. scroll
window.addEventListener('scroll', event => {
    body.style.backgroundColor= '#EBF5DF';
    header.style.backgroundColor= '#EBF5DF';

})

// 10.copy
document.addEventListener('copy', event => alert('Find something that you like to copy? No proble!'));

//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

const contentDes = document.querySelector('.content-destination');
const destinationContext = contentDes.querySelector('p');

destinationContext.addEventListener('click', event => {
    event.target.style.color = '#8C271E';
    event.stopPropagation(); //this will stop the click event from bubbling up to contentDes
} );
contentDes.addEventListener('click', event => {
    contentDes.style.border = '4px dashed #F9AB55'
})

// Stop the navigation items from refreshing the page by using preventDefault()
navLinks.forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
})
