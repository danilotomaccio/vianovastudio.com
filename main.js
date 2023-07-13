const myText = document.querySelector('#my-text');
const text = myText.textContent;
myText.textContent = '';

for (let letter of text) {
    const div = document.createElement('div');
    div.className = 'letter-container';
    div.style = "display: inline-block; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);";

    let letterElement = document.createElement('div');
    letterElement.textContent = letter;
    const fontSizeValue = ((Math.random() * 100) + 50);
    const fontSize = fontSizeValue + "px";
    letterElement.style.fontSize = fontSize;
    letterElement.style.lineHeight = fontSize;
    // letterElement.style.transform = `translateY(${-fontSizeValue - 115}px)`;
    letterElement.className = 'letter';

    div.appendChild(letterElement);
    myText.appendChild(div);
}

gsap.to('.letter', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);

let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: true
  });
  
  // pin box-c when it reaches the center of the viewport, for 300px
  ScrollTrigger.create({
    trigger: ".box-c",
    pin: true,
    start: "center center",
    end: "+=300",
    markers: true
  });
  
  document.querySelector("button").addEventListener("click", e => {
    // scroll to the spot where .box-c is in the center.
    // parameters: element, smooth, position
    smoother.scrollTo(".box-c", true, "center center");
    
    // or you could animate the scrollTop:
    // gsap.to(smoother, {
    // 	scrollTop: smoother.offset(".box-c", "center center"),
    // 	duration: 1
    // });
  });
  