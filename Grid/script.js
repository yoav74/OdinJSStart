function Load(num) {
    if (num > 100)
        return;
    const Container = document.querySelector(".container")
    Container.innerHTML = '';
    const squareSize = (800 / num);
    for (let i = 0; i < (num * num); i++) {
        const divInside = document.createElement("div");
        divInside.style.width = `${squareSize}px`;
        divInside.style.height = `${squareSize}px`;
        divInside.classList.add("grid");
        divInside.style.backgroundColor = "white";
        divInside.addEventListener("mouseenter", () => {
            divInside.style.backgroundColor = "red";
        })
        divInside.addEventListener("mouseout", () => {
            divInside.style.backgroundColor = "white";
        })
        Container.appendChild(divInside)
    }
}

window.onload = () => {
    Load(16);
    const button = document.querySelector("#butt");
    const input = document.querySelector("#top");
    button.addEventListener("click", () => {
        Load(input.value);
    })
}