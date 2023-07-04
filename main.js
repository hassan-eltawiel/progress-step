let progress = document.querySelector(".progress");
let circles = document.querySelectorAll(".circle");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let currentActive = 1;

next.addEventListener("click",() => {
    
    currentActive++;
    update()
    console.log(currentActive);
})
prev.addEventListener("click",() => {
    
    currentActive--;
    update()
    console.log(currentActive);
})
function update() {
    circles.forEach((circle , index )=> {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

    })
    let active = document.querySelectorAll(".active");
    progress.style.width = (active.length -1) / (circles.length -1) * 100 + "%";

    if (currentActive === 1) {
        prev.classList.add("disabled");
    } else if (currentActive === circles.length) {
        next.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
        next.classList.remove("disabled");
    }
}

