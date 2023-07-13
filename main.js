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