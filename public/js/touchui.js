const elements = document.getElementsByClassName("touch-ui");
for (let bt of elements) {
bt.addEventListener("click",(e) => {
    let x = e.pageX - e.target.getBoundingClientRect().left;
    let y = e.pageY - e.target.getBoundingClientRect().top;
    let cir = document.createElement("span");
    cir.classList.add("circle");
    cir.style.marginTop = x + "px";
    cir.style.marginLeft = y + "px"; 
    console.log(x + " " + y);
    e.currentTarget.appendChild(cir);
    setTimeout(() => cir.remove(),400);
});
}
