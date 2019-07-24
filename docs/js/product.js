var carousel = function() {
  $('.carousel-project').owlCarousel({
    autoplay: true,
    autoHeight: true,
    center: true,
    loop: true,
    items:1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    dots: true,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    }
  });

};
carousel();

// prevent the service item link jump
var onePageClick = function() {
  $(document).on('click', 'a[href="#"]', function (event) {
    event.preventDefault();
  });
};

onePageClick();

var cpBtn = document.querySelector(".cp-btn");
 var email = document.querySelector('.em-ipt');
 cpBtn.addEventListener('click', () => {
    email.focus();
    email.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    cpBtn.innerHTML = "Copied!";

 })