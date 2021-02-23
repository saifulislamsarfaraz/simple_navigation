const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const openLeft = document.getElementById('openLeft')
const closeLeft = document.getElementById('closeLeft')
//const container = document.querySelector('.container')


close.addEventListener('click', () => container.classList.remove('show-nav'))


open.addEventListener('click', () => container.classList.add('show-nav'))

closeLeft.addEventListener('click', () => container.classList.remove('show-nav1'))


openLeft.addEventListener('click', () => container.classList.add('show-nav1'))


const search = document.querySelector('.search')
const btn_search = document.querySelector('.btn_search')
const input_search = document.querySelector('.input_search')


btn_search.addEventListener('click', () => {
  search.classList.toggle('active')
  input_search.focus()
})





