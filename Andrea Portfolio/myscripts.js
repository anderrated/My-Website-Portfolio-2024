let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// function removeTwoSlides(){
//     const items = document.querySelectorAll('.item');
//     if (items.length > 1){
//         items[items.length - 1].remove();
//         items[items.length - 2].remove();
//     }
// }

// function checkMediaQuery(){
//     const mediaQuery = window.matchMedia('(max-width: 1075px)');
//     if (mediaQuery.matches){
//         removeTwoSlides();
//     }
// }

// checkMediaQuery();
// window.addEventListener('resize', checkMediaQuery);