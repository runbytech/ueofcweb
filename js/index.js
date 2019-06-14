/**
 * script for index.js
 * @2019/06/11
 */


 var moreBtns = document.querySelectorAll(".read-more");
 moreBtns.forEach(function(btn){
  btn.addEventListener('click', () => {
    window.scrollBy(0, 700)
  })
 })

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
    console.log('copy!');

 })