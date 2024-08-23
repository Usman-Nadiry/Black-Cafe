// steps:
// 1. get locomotive css cdn from locomotive js search
// 2. get locomotive js cdn from locomotive js search
// 3. go to github.com/locomotivemtl/locomotive-scroll
// 4. link html with js at the end of last scripts otherwise our effects won't work
// 5. add gsap first link from (https://cdnjs.com/libraries/gsap)
// 6. copy and paste all required libraries from sheryjs github account(https://github.com/aayushchouhan24/sheryjs)
// 7. get sheryjs css and js links from (https://github.com/aayushchouhan24/sheryjs)
// 8. 


const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

gsap.from('nav a',{
    stagger:.2,
    duration:1,
    y:90,
    opacity:0,
    ease:Power3,

})

Shery.textAnimate(".banner h1", {
    style: 2,
    y: 20,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from('.wel-img1',{
    opacity:0,
    y:-100,
    duration:2,
    delay:.05,
    ease:Power2,
})

gsap.from('.wel-img2',{
    opacity:0,
    y:100,
    duration:2,
    delay:.05,
    ease:Power3
})

Shery.imageEffect('.pinimg',{
    style:3,
    debug:true,
})

var button = document.querySelector('.delight-video-btn')
var video = document.querySelector('.delight-video video')
button.addEventListener('mouseover', function(){
    gsap.to('.delight-video video',{
        opacity:1,
        ease:Power4,
        duration:1.2,
    })
    gsap.to('.delight-video-text',{
        opacity:0,
        duration:1,
        ease:Power3,
    })
})

video.addEventListener('mouseleave',function(){
    gsap.to('.delight-video-text',{
        opacity:1,
        duration:1,
        ease:Power2,
    })
    gsap.to(video,{
        opacity:0,
        duration:1,
        ease:Power3,
    })
})



// writing js for reserve.html


