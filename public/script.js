document.addEventListener('scroll', function(){
    const progressData = [88, 81, 70, 90]
    const progressCount = document.querySelectorAll('.progress-count');
    const progress = document.querySelectorAll('.progress');
    const progressPosition = document.getElementById('progress').offsetTop;
    const progressHeight = document.getElementById('progress').offsetHeight;
    if(window.scrollY >= (progressPosition - progressHeight)){
        for(const data in progressData){
            progress[data].style.width = progressData[data] + '%';
            progress[data].style.transition = "all 1s ease";
            progressCount[data].style.right = '0%';
            progressCount[data].innerText = progressData[data] + '%';
        }
    }
})


// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});