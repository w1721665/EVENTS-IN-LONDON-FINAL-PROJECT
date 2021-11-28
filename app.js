const navSlide = () => {
    const burger = document.querySelector('.burger)';
    const navLinks = document.querySelectorAll('.nav-links li');
    
    const nav = document.querySelector('.nav-links');
  
  burger.addEventListener('click',()=>{
      //Toggle Nav
    nav.classList.toggle('nav-active');
  
          //Animate Links
          navLinks.forEach((link,index) => {
              if (link.style.animation) {
                  link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`/;
    
            }
          });
          //Burger Animation
          burgerclassList.toggle('toggle');
        });
  
  }
  
  navSlide();