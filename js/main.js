/* jquery smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1500);
});
*/


function scrollToAnchor(anchor) {
  var aTag = document.getElementById("faq");
  
  console.log(anchor)
  console.log(aTag)


  window.scrollTo(0, 5000);
  
  /* 
  window.scrollTo({
    top: anchor.offsetHeight,
    behavior: 'smooth'
  });
  */

  /* $('html,body').animate({ scrollTop: aTag.offset().top }, 1500); */

}
