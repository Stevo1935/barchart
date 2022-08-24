'use script'
const wed = document.querySelector('.wed');
const thu = document.querySelector('.thu');
const openWed = document.querySelector('.open-wed');
const openThu = document.querySelector('.open-thu');

wed.addEventListener('click', function(){
    openWed.classList.toggle('hidden')
})
thu.addEventListener('click', function(){
    openThu.classList.toggle('hidden')
}
)
