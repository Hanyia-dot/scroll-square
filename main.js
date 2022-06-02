const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;

let size = 100;  //square size

square.style.width = size + "px";  //first way
square.style.height = `${size}px`;  //second way


window.addEventListener("scroll", function() {
    if(size >= this.window.innerWidth * 0.5) {
        grow = !grow;
    }

    else if (size == 0) {
        grow = !grow;
    }
    
    if (grow){
        size+=10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

    else {
        size-=10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
})