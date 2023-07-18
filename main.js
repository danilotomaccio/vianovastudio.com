gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

ScrollTrigger.create({
  trigger: "#sez-1",
  pin: true,
  // start: "center center",
  end: "+=800",
  // markers: true
});

ScrollTrigger.create({
  trigger: "#sez-2",
  pin: true,
  // start: "center center",
  end: "+=800",
  // markers: true
});

const cutterTimeline = new gsap.timeline({
  ease: 'none',
  /* scrollTrigger: {
    trigger: "#sez-3",
    pin: true,
    scrub: 1,
    end: `+=800`,
    // end: `+=${window.innerHeight * 2}`,
    //markers: true
  } */
});

/* cutterTimeline.fromTo(document.getElementById("cutter"),
  {
    xPercent: -100
  },
  {
    xPercent: 100,
  },
  1.5
); */

cutterTimeline.to("#cutter", {
  xPercent: 100
})

/* document.querySelector("button").addEventListener("click", e => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  smoother.scrollTo(".box-c", true, "center center");
  
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  // 	scrollTop: smoother.offset(".box-c", "center center"),
  // 	duration: 1
  // });
}); */




/* let cv_tl = new gsap.timeline({
  ease: 'none',
  scrollTrigger: {
    trigger: "#cont_cv",
    start: "top top+=100",
    end: "+=800",
    scrub: true,
    markers: true,
    pin: true
  }
}); */

gsap.set("#cont_cv", { perspective: 1000 });


cutterTimeline.from(
  "#cont_cv .top_cv",
  {
    duration: 2,
    transformOrigin: "left top",
    autoAlpha: 0,
    ease: "none"
    //transformStyle: "preserve3d",
  },
  1.5
);

cutterTimeline.from(
  "#cont_cv .not_top_cv",
  {
    duration: 2,
    transformOrigin: "left top",
    autoAlpha: 0,
    ease: "none",
    //transformStyle: "preserve3d",
    rotationX: 180, // do not use negative rotation in this case
    stagger: 3
  },
  "+1.5"
);
