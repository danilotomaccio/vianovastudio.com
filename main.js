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

gsap.to(document.getElementById("cutter"), {
  xPercent: 100,
  ease: 'none',
  scrollTrigger: {
    trigger: "#sez-3",
    pin: true,
    scrub: 1,
    end: "+=1000",
    //markers: true
  }
}
);

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
