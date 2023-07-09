var swiper;

// Animation to actually pull the intro page upwards
async function PageUpAnim() {
  var introEle = document.getElementById('scroll-div-1');
  var skillEle = document.getElementById('scroll-div-2');

  introEle.style.transition = 'transform 2s';
  introEle.style.transform = 'translateY(-1000px)';

  skillEle.classList.remove('d-none');
  skillEle.style.transform = 'translateY(1000px)';

  await sleepWait(1000);
  introEle.style.display = 'none';
  navbarAnimation();
  skillEle.style.transition = 'transform 1s';
  skillEle.style.transform = 'translateY(0px)';

  // Initialize a new Swiper class only once
  try {
    swiper.destroy();
  } catch (error) {
    if (error instanceof TypeError){
      console.log('Initial swiper load animation');
    }
  }

  swiper = new Swiper('.swiper', {
    loop: true,
    speed: 2000,
    slidesPerView: 1,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  });

  var popupEle = document.getElementById('popup');
  popupEle.classList.remove('d-none');

  console.log('Page Up animation complete');
}

// Animation to pull the intro page downwards
async function PageDownAnim() {
  var introEle = document.getElementById('scroll-div-1');
  var skillEle = document.getElementById('scroll-div-2');
  var navBar = document.getElementsByClassName('nav-color');

  skillEle.style.transition = 'transform 2s';
  skillEle.style.transform = 'translateY(1000px)';
  navBar[0].classList.toggle('d-none');
  await sleepWait(1000);
  skillEle.classList.add('d-none');
  introEle.style.display = 'block';

  await sleepWait(100);
  introEle.style.transition = 'transform 1s';
  introEle.style.transform = 'translateY(0px)';

  var popupEle = document.getElementById('popup');
  popupEle.classList.add('d-none');

  console.log('Page Down animation complete');
}

function introPageTransition(){
  const introDiv = document.getElementById('scroll-div-1');
  const restDiv = document.getElementById('scroll-div-2');

  console.log('Inactive');
  introDiv.classList.toggle('inactive');

  console.log('Active');
  restDiv.classList.toggle('active');
}
