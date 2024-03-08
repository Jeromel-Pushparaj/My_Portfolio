

// Get the headers position from the top of the page, plus its own height
var startY = 380;

$(window).scroll(function(){
    checkY();
});

function checkY(){
    if( $(window).scrollTop() > startY ){
        console.log("I am activating")
        $('.menubar1').slideDown();
    }else{
        $('.menubar1').slideUp();
    }
}

// Do this on load just in case the user starts half way down the page
checkY();

// var startY = 500;
// window.addEventListener("scroll",function() { 
//     if(window.scrollY > 500) {
//          console.log("I am activated");
//        $('.menubar1').slideDown();
//     }
//     else {
//        $('.menubar1').slideUp();
//     }
//  },false);