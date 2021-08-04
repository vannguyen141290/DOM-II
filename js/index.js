// Your code goes here

// mouseenter + mouseleave + preventDefault
const navLinks = document.querySelectorAll('a');
navLinks.forEach(item => item.addEventListener('mouseenter', (event)=>{
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'blue';
    event.target.style.fontStyle = 'italic';
    event.stopPropagation();
}));

navLinks.forEach(item => item.addEventListener('mouseleave', (event)=>{
        event.target.style.color = 'black';
        event.target.style.fontStyle = 'normal';
        event.target.style.fontSize = '1rem';
        event.stopPropagation();
}));

navLinks.forEach(item => item.addEventListener('click', (event)=>{
    event.preventDefault();

}));


// 4-dblclick + 6-resize
const imgContent = document.querySelectorAll('.img-content img');
imgContent.forEach(item => item.addEventListener('dblclick', function (e) {
    item.classList.toggle('large');
}));

window.addEventListener('resize', () => {
    imgContent[0].src = 'img/fun.jpg';
});

window.addEventListener('resize', () => {
    imgContent[1].src = 'img/adventure.jpg';
});




// 5-scroll
// window.addEventListener('scroll', (event)=>{
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;
//     // console.log(scrollable);
//     // console.log(scrolled);
//     if (scrollable === Math.ceil(scrolled)){
//         alert('You have reached the bottom of the page!')
//     }
// });


// styling
const contentPick = document.querySelector('.content-pick');
contentPick.style.display = 'flex';
contentPick.style.flexWrap = 'nowrap';
contentPick.style.width = "30%";
contentPick.style.margin = '0 2% 5% 2%';


// click
const button = document.querySelectorAll('.btn');
button.forEach(item => {
    item.style.border = 'blue solid 2px';
    item.style.width = '100px';
    item.style.textAlign = 'center';
    item.style.borderRadius = '90px';
});
button.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'lightblue';
        event.stopImmediatePropagation();
    })
});


//load 
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//focus + blur
const promoCode = document.querySelector('input[type='text']');
promoCode.addEventListener('focus', (event)=>{
    event.target.style.background = 'lightpink';
});
promoCode.addEventListener('blur', (event)=>{
    event.target.style.background = '';
})