options = {
    "outerStyle": "circle",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};

magicMouse(options);

const outer = document.getElementById("magicMouseCursor");
const inner = document.getElementById('magicPointer');
const htmlElement = document.documentElement;

document.addEventListener("DOMContentLoaded", function() {
    try{
        outer.classList.add('d-none');
        inner.classList.add('d-none');
        inner.classList.add('magicPointer-new');
    } catch (error){
        if(error instanceof TypeError){
        }
    }
    
});

htmlElement.addEventListener("mouseenter", function() {
    try{
        outer.classList.remove('d-none');
        inner.classList.remove('d-none');
    } catch (error){
        if(error instanceof TypeError){
        }
    }
});

htmlElement.addEventListener("mouseleave", function() {
    try{
        outer.classList.add('d-none');
        inner.classList.add('d-none');  
    } catch (error){
        if(error instanceof TypeError){
        }
    }
});

htmlElement.addEventListener("mousemove", function() {
    try{
        outer.classList.remove('d-none');
        inner.classList.remove('d-none');    
    } catch (error){
        if(error instanceof TypeError){
        }
    }
});