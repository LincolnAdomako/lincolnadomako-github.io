let text = document.getElementById('text')
let sky = document.getElementById('sky')
let hill = document.getElementById('hill')
let elephant1 = document.getElementById('elephant1')
let elephant2 = document.getElementById('elephant2')

window.addEventListener ('scroll', () => {
    let value = window.scrollY;

    if(value < screen.height - 200){
        text.style.marginTop = value * 2.5 + 'px';
        hill.style.top = value * 1 + 'px';
        elephant1.style.left = value * -1.5 + 'px';
        elephant2.style.left = value * 1.5 + 'px';
    }
    
    console.log(value, value*2.5)
    console.log("I am done!")
})