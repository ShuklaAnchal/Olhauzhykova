
function pageOneAnimation(){
 var tl = gsap.timeline({
    scrollTrigger :{
        trigger: "#home",
        start:"5%",
        scrub:1,
        pin: true,
        markers: true,
    }
})
tl
.to("#img img",{
    left:"100%",
    top:"55%",
    duration:10,
    delay:0.5,
    rotate: "360deg",
        ease: Power1
},"same")

.to("#sm",{
    rotate: "14deg",
         duration: 5,
         top:"-8%",
    ease: Power1
},"same")
.to("#sm",{
    delay:1,
    rotate: "1deg",
         duration: 1,
         top:"0%",
    ease: Power1
},"same2")
}
pageOneAnimation();




