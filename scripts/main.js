

const navLinks = document.querySelectorAll('.navlink');
const sections = document.querySelectorAll('.section');
let activeSection = 'home';
window.addEventListener('scroll',()=>{

  sections.forEach(element => {
    if(window.scrollY >= (element.offsetTop-element.clientHeight/1.6)){
      activeSection = element.id
    }
  });

  navLinks.forEach(link=>{
    if(link.href.includes(activeSection)){
      document.querySelector('.active-nav').classList.remove('active-nav');
      link.classList.add('active-nav')
    }
  })


});


//Mobile menu

function menuClose(params) {

    
  let mediaQuery = window.matchMedia('(max-width: 780px)');
    if (mediaQuery.matches){    
  
      document.querySelector('.menu').style.display = 'none';
      document.querySelector('.blur-background').style.opacity = 0;
      document.querySelector('.blur-background').style.display = 'none';
      document.querySelector('.open-menu').style.display = 'block';
      document.querySelector('.close-menu').style.display = 'none';
    }
    
  }
  
  let mediaQuery = window.matchMedia('(max-width: 780px)');
  if (mediaQuery.matches){      
    // console.log(mediaQuery.matches);
    let responsiveMenuCheck = document.getElementById('menu-check');
    responsiveMenuCheck.addEventListener('change',()=>{
                                                        if (responsiveMenuCheck.checked){
                                                          document.querySelector('.menu').style.display = 'block';
                                                          document.querySelector('.close-menu').style.display = 'block';
                                                          document.querySelector('.blur-background').style.display='block';
                                                          document.querySelector('.blur-background').style.opacity = 1;
                                                          document.querySelector('.open-menu').style.display = 'none';
                                                          
                                                        }
                                                        else{
                                                          menuClose();
                                                        
                                                        }
                                                      })
    }
  if (mediaQuery.matches){
    document.getElementById('biwiz').textContent ="&business Intelligence";
    document.getElementById('ninja').textContent ="ninja";
    let works = document.querySelectorAll('.work');
    works.forEach(work=>{
      work.classList.add('swiper-slide');
      
    });
  }
  //   let workContainer = document.getElementById("w_container");
        
  //       // Create div elements with the specified classes
  //       let swiperWrapper = document.createElement("div");
  //       swiperWrapper.classList.add('swiper-wrapper');

  //       let swiper = document.createElement("div");
  //       swiper.classList.add('swiper', 'slide-swiper');

  //       // Append swiperWrapper to swiper, and swiper to workContainer
  //       swiper.appendChild(swiperWrapper);
        
  //               while (workContainer.firstChild) {
  //                   swiperWrapper.appendChild(workContainer.firstChild);
  //               }
  //       workContainer.appendChild(swiper);

     
  // }
  
  