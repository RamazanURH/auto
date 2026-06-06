const headers = document.querySelectorAll('[data-name="accordion__btn"]')
console.log(headers)

headers.forEach(function(item){
  item.addEventListener('click',showContent)
})

function showContent(){
  this.nextElementSibling.classList.toggle('accordion__hidden')
}

