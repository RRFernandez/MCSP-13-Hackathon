const slide = anime({
    targets: 'div.box',
    translateX: 300,
    loop: true,
    delay: function(el, i) { return i * 700; },
    duration: 2000,
    endDelay: 600,
    autoplay: false,
})

const spin = anime({
    targets: 'div.box',
    translateX: 250,
    rotateZ: 360,
    loop: true,
    duration: 3000,
    endDelay: 600,
    autoplay: false,
})

const steps = anime({
    targets: 'div.box',
    translateX: 250,
    // direction: 'alternate',
    loop: true,
    easing: 'steps(5)',
    duration: 700,
    endDelay: 600,
    autoplay: false,
})


document.querySelector("#slide").onclick = slide.play;
document.querySelector("#reverse").onclick = slide.reverse;

document.querySelector("#spin").onclick = spin.play;
document.querySelector("#reverse").onclick = spin.reverse;

document.querySelector("#steps").onclick = steps.play;
document.querySelector("#reverse").onclick = steps.reverse;