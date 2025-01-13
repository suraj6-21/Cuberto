Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./assets/0.mp4", "./assets/2.mp4", "./assets/3.mp4"],
});


gsap.to(".f-left-element",{
    scrollTrigger:{
        trigger:"#featured-images",
        pin:true,
        start:" top top",
        end: "bottom bottom",
        endTrigger: ".last-elm",
        scrub:1
    },
    y:"-300%",
    ease: Power1
})


let sections = document.querySelectorAll(".f-left-element");
Shery.imageEffect("#images", {
    style: 5,
    // config: {onMouse: {value:1 }},
    slideStyle: (setScroll) => {
     sections.forEach(function(sections, index){
        ScrollTrigger.create({
            trigger:sections,
            start: "top top",
            scrub: 1,
            onUpdate: function(prog){
                setScroll(prog.progress + index)
            }
        })
     })
    },
  });


