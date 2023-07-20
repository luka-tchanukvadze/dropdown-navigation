const screenWidthInRems = 56.25

const mobileHide = document.querySelector('.mobile-hide')
const mobileHideRight = document.querySelector('.mobile-hide-right')
const mobileHeaderLeft = document.querySelector('.mobile-header-left')
const mobileHeaderRight = document.querySelector('.mobile-header-right')

const formobileImg = document.querySelector('.desktop-img')
const originalSrc = './images/image-hero-desktop.png'


const feature = document.querySelector('.feature-hide')
const featureArrow = document.querySelector('.arrow1')
const featureArrow3 = document.querySelector('.arrow3')
const mobileFeature = document.querySelector('.feature-hide2')

const company = document.querySelector('.company-hide')
const mobileCompany = document.querySelector('.company-hide2')
const companyArrow = document.querySelector('.arrow2')
const companyArrow4 = document.querySelector('.arrow4')

const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const close = document.querySelector('.x')

checkDisplay(feature)
checkDisplay(mobileFeature)
checkDisplay(company)
checkDisplay(mobileCompany)
checkDisplayBlock(mobileMenu)


function checkDisplay(element){
  element.style.display = element.style.display === 'none' ? 'flex' : 'none'
}

function checkDisplayBlock(element){
  element.style.display = element.style.display === 'none' ? 'block' : 'none'
}



featureArrow.addEventListener('click', () => {
  checkDisplay(feature)
  checkDisplay(mobileFeature)
})

featureArrow3.addEventListener('click', () => {
  checkDisplay(mobileFeature)
})


companyArrow.addEventListener('click', () => {
  checkDisplay(company)
})

companyArrow4.addEventListener('click', () => {
  checkDisplay(mobileCompany)
})

menu.addEventListener('click', () => {
  checkDisplayBlock(mobileMenu)
})

close.addEventListener('click', () => {
  if(mobileMenu.style.display === 'block'){
    mobileMenu.style.display = 'none'
  } else{
    mobileMenu.style.display = 'block'
  }
})



function updateHeaderContent() {
  const currentScreenWidth = window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize)


  if (currentScreenWidth < screenWidthInRems) {
  
    mobileHide.style.display = 'none'
    mobileHideRight.style.display = 'none'

    mobileHeaderLeft.style.display = 'block'
    mobileHeaderRight.style.display = 'block'

    formobileImg.src = './images/image-hero-mobile.png'

  }

  else{
    mobileHide.style.display = 'flex'
    mobileHideRight.style.display = 'flex'

    mobileHeaderLeft.style.display = 'none'
    mobileHeaderRight.style.display = 'none'

    formobileImg.src = originalSrc
    mobileMenu.style.display = 'none'
  }

 
}
  
updateHeaderContent()

window.addEventListener('resize', updateHeaderContent);


feature.classList.add('feature-hide-class');
company.classList.add('company-hide-class');
mobileCompany.classList.add('company-hide2-class');
mobileFeature.classList.add('feature-hide2-class')
mobileMenu.classList.add('mobile-menu-class')

window.onclick = function(event) {
  if (!event.target.matches('.feature-hide-class') && event.target !== featureArrow) {
    feature.style.display = 'none';
  }

  if (!event.target.matches('.company-hide-class') && event.target !== companyArrow) {
    company.style.display = 'none';
  }

  if (!event.target.matches('.company-hide2-class') && event.target !== companyArrow4) {
    mobileCompany.style.display = 'none';
  }

  if (!event.target.matches('.feature-hide2-class') && event.target !== featureArrow3) {
    mobileFeature.style.display = 'none';
  }

}
