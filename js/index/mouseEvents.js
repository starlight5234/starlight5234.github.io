var isScrolling = false;
var wheelTimeout;

var skillEle = document.getElementById('scroll-div-2');

function preventWheel(event) {
    if (isScrolling) {
        event.preventDefault();
        return;
    }

    isScrolling = true;

    clearTimeout(wheelTimeout);

    wheelTimeout = setTimeout(async function() {
        
        if(skillEle.classList.contains('d-none')){
            if (event.deltaY > 0) {
                console.log('Scrolling in Intro')
                await PageUpAnim();
                await sleepWait(2000);
            }
        }

        isScrolling = false;
    }, 200);
}

window.addEventListener('wheel', preventWheel, {passive: false});