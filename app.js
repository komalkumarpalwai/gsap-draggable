Draggable.create(".cir1", {
    type: 'x',
    bounds: '.box'
});

function checkingoverlap() {
    var div1 = document.querySelector(".cir1");
    var div2 = document.querySelector(".cir2");
    var d1 = div1.getBoundingClientRect();
    var d2 = div2.getBoundingClientRect();

    if (d1.left > d2.left) {
        document.querySelector(".first").style.display = "none";
    } else {
       
        main.style.backgroundColor = "black";
    }
}

window.addEventListener("mousemove", checkingoverlap);
