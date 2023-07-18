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

/* ScrollTrigger.create({
  trigger: "#sez-2",
  pin: true,
  // start: "center center",
  end: "+=800",
  // markers: true
}); */


const cutterTimeline = new gsap.timeline({
  ease: 'none',
  scrollTrigger: {
    trigger: "#sez-3",
    pin: true,
    scrub: 4,
    end: `+=2000`,
    // markers: true
  }
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
  borderBottomWidth: 0,
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,

},
  "+1"
);


cutterTimeline.to("html", {
  "--shadow-alpha": 1,
  "--shadow-visibility": "inherit",
  duration: 2,
},
  "<"
);

const sections = gsap.utils.toArray("#sez-2 section");

const scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#sez-2",
    pin: true,
    scrub: 1,
    end: "+=3000",
    snap: {
      snapTo: 1 / (sections.length - 1),
    },
    markers: true,
  }
});
