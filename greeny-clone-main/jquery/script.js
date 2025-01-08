
// HEADER
window.addEventListener('scroll', function(){
  var header = document.querySelector('.header');
  if (window.scrollY > 2){
    header.classList.add('sticky');
  } else{
    header.classList.remove('sticky');
  }
});

const section1 = document.querySelector('#home');
const section2 = document.querySelector('#Services');
const section3 = document.querySelector('#projects');
const section4 = document.querySelector('#about');
const section5 = document.querySelector('#testimony');
const section6 = document.querySelector('#blog');
const section7 = document.querySelector('#contact');
const linkStyle = document.querySelectorAll('.link');
const eventStyle = document.querySelectorAll('.underline');
const myArray = [section1, section2, section3, section4, section5, section6, section7];

for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] && eventStyle[index] && linkStyle[index]) {
        myArray[index].addEventListener('mouseover', function() {
            eventStyle[index].style.width = '100%';
            linkStyle[index].style.color = '#31DE79';
            
        });

        myArray[index].addEventListener('mouseout', function() {
            eventStyle[index].style.width = '0%';
            linkStyle[index].style.color = 'inherit';
        });
    } else {
        console.error(`Element not found for index ${index}`);
    }
}



// HOME
      $("#carousel1").owlCarousel({
        loop: true,
        // margin: 10,
        nav: false,
        loop:true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        animateIn: 'fadeInUp',
        animateOut: 'fadeOut',
        autoplayspeed: '1000',
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });

// SERVICES
document.querySelectorAll('.sidebar ul li').forEach(link => {
  link.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    
    // Hide all content wrappers
    document.querySelectorAll('.service-content').forEach(content => {
      content.style.display = 'none';
    });
    
    // Show the clicked content
    document.getElementById(targetId).style.display = 'block';
  });
});



// PROJECTS
$("#carousel2").owlCarousel({
  loop: true,
  center: true,
  margin: 10,
  nav: false,
  dots: true,
  
  // loop:true,
  items: 6,
  autoplay:true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  // animateIn: 'fadeInUp',
  // animateOut: 'fadeOut',
  // autoplayspeed: '1000',
  responsive: {
    0: {
      items: 1,
    },
    780: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
  
});



// ABOUT
var countdownNumber = 1;
var countdownElement = document.getElementById("timer");

function updateCountdown() {
    countdownElement.innerHTML = countdownNumber;
    countdownNumber++;
    if (countdownNumber > 20) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "20";
    }
}

var countdownInterval = setInterval(updateCountdown, 1000);


// BLOG
$(".loop").owlCarousel({
  loop: true,
  margin: 0,
  center: true,
  nav: false,
  dots: true,
  loop:true,
  items: 3,
  autoplay:true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  // animateIn: 'fadeInUp',
  // animateOut: 'fadeOut',
  // autoplayspeed: '1000',
  responsive: {
    0: {
      items: 1,
    },
    781: {
      items: 2,
    },
    993: {
      items: 3,
    },
  },
  
});