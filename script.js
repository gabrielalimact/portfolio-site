// how to show the menu?
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

// show
// console.log('its working')
if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.add('show-menu');
  })
}
if(navClose){
  navClose.addEventListener('click', function() {
    navMenu.classList.remove('show-menu');
  })
}

/* remove menu mobile when clicks */
const navLink = document.querySelectorAll('.nav__link');

function linkClick(){
  const navMenu = document.querySelector('#nav-menu')
  navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', linkClick));


const skillsContent = document.querySelectorAll('.skills__container'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
  let item = this.parentNode.className

  for(i=0; i<skillsContent.length; i++){
    skillsContent[i].className = 'skills__container skills__close'
  }
  if(item === 'skills__container skills__close'){
    this.parentNode.className = 'skills__container skills__open'
  }
}
skillsHeader.forEach(header => header.addEventListener('click', toggleSkills));



const tabs=document.querySelectorAll('[data-target]'),
      tabContent=document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
  tab.addEventListener('click', function(){
    const target = document.querySelectorAll(tab.dataset.target)

    tabContent.forEach(content => {
      content.className.remove('qualification__active')
    })

    target.classList.add('qualification__active')

    tab.forEach(tab =>{
      tab.classList.remove('qualification__active')
    })

    tab.classList.add('qualification__active')
  })
})


let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});


// dark/ligth theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// previously selected topic ~if user selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously selected a theme
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// activate or deactivate the theme
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})