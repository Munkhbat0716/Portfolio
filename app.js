const hamburgetButton= document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgetButton.addEventListener('click', toggleButton)