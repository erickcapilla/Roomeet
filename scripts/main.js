const btn_menu = document.getElementById('btn_menu')
const arrow = document.getElementById('arrow')
const menu_card = document.getElementById('menu')

btn_menu.addEventListener('click', () => {
  if(!arrow.classList.contains('arrow-down')) {
    arrow.classList.add('arrow-down')
    menu_card.classList.add('menu-active')
  } else {
    arrow.classList.remove('arrow-down')
    menu_card.classList.remove('menu-active')
  }
})