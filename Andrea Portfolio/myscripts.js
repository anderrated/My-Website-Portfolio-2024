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

function removeTwoSlides(){
    console.log('Script is running');
    const items = document.querySelectorAll('.item');
    if (window.innerWidth <= 1075) {
        for (let i = items.length - 2; i < items.length; i++) {
            items[i].classList.add('hidden');
        }
    } else {
        items.forEach(item => item.classList.remove('hidden'));
        }
}

window.addEventListener('resize', removeTwoSlides);
window.addEventListener('load', removeTwoSlides);