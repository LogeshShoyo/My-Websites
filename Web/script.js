let current = 0;
const cards = [
    {
        heading: "Suzume",
        image: "Suzume.jfif",
        bg: "linear-gradient(to Top, #000000, #032c3a, #04587c)",
        glow: "#00ffff"
    },
    {
        heading: "DeathNote",
        image: "deathnot.jfif",
        bg: "linear-gradient(to Top, #000000, #360606, #b12020)",
        glow: "#a80f0f"
    },
    {
        heading: "Haikyuu!",
        image: "Haikyuu.jfif",
        bg: "linear-gradient(to Top, #000000, #421706, #ff4800)",
        glow: "#ff4800"
    }
] 

function changecard() {
    current++;

    if (current >= cards.length){
        current = 0;
    }

    const heading = document.getElementById("heading");
    const image = document.getElementById("image");

    heading.style.opacity = 0;
    image.style.opacity = 0;

    image.style.boxShadow = `0 0 25px ${cards[current].glow}, 0 0 50px ${cards[current].glow}`;
    document.body.style.background = cards[current].bg;



    setTimeout(()=> {
        heading.innerText = cards[current].heading;
        image.src = cards[current].image;

        heading.style.opacity = 1;
        image.style.opacity = 1;
    }, 500)
}

function loadcard(){
    const heading = documesnt.getElementById("heading");
    const image = document.getElementById("image");
    
    image.style.boxShadow = `0 0 25px ${cards[current].glow}, 0 0 50px ${cards[current].glow}`;
    document.body.style.background = cards[current].bg;

    heading.innerText = cards[current].heading;
    image.src = cards[current].image;
}

loadcard();