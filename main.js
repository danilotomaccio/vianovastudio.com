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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
GSDevTools.create();


const cutterTimeline = new gsap.timeline({
  ease: 'none'
});


cutterTimeline.to("#cutter", {
  x: "100%",
  duration: 1.5
});

gsap.set("#contatti", { perspective: 1000 });

cutterTimeline.fromTo(
  "#contatti .contatti-cover",
  {
    duration: 2,
    transformOrigin: "left top",
    // autoAlpha: 0,
    // ease: "none",
    transformStyle: "preserve3d",
    rotationX: 180,
    stagger: 3,
    borderBottomWidth: "1px",
  }, {
    rotationX: 70,
  borderBottomWidth: 0

},
  "+1"
);

console.log(document.querySelector(".contatti-cover:after"));

cutterTimeline.to("html", {
  "--shadow-alpha": 1,
  "--shadow-visibility": "inherit",
  duration: 2,
},
  "<"
);
