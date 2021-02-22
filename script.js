const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const openLeft = document.getElementById('openLeft')
const closeLeft = document.getElementById('closeLeft')
//const container = document.querySelector('.container')

let currentAcitve = 1;

close.addEventListener('click', () => container.classList.remove('show-nav'))


open.addEventListener('click', () => container.classList.add('show-nav'))

closeLeft.addEventListener('click', () => container.classList.remove('show-nav1'))


openLeft.addEventListener('click', () => container.classList.add('show-nav1'))





