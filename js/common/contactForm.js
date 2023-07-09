function sleepWait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const nameElement = document.getElementById("inputName");
const mailElement = document.getElementById("inputMail");
const queryMsgElement = document.getElementById("inputQuery");

var nameVal;
var emailVal;
var queryMessage;
var messageText;

// Client sided validation because I don't want to redirect for validation
function validate() {
    nameVal = nameElement.value;
    // Regular expression pattern to match valid names
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(nameVal) || nameVal.trim().length === 0) {
        return 0;
    }

    emailVal = mailElement.value;
    // Regular expression pattern to match valid email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailVal) || emailVal.trim().length === 0) {
        return 1;
    }

    queryMessage = queryMsgElement.value;
    if (queryMessage.trim().length === 0) {
        return 2;
    }

    return 3;
}

var form = document.getElementById("contactForm");

async function submitQuery(event) {
    isvalid = validate();
    if (isvalid == 3) {
        var data = new FormData(event.target);
        targetHTTP = "https://formspree.io/f/mrgwznjb";
        fetch(targetHTTP, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Thanks for your submission!");
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form");
                    }
                })
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form");
        });

        form.reset();
    } else {
        const inputElement = ["Name", "Email", "Message"];
        alert('Make sure you have filled ' + inputElement[isvalid] + ' correctly');
    }
}

async function navbarAnimation() {
    var navBar = document.getElementsByClassName('nav-color');
    navBar[0].classList.toggle('d-none');
    navBar[0].style.transform = 'translateY(-500px)';
    await sleepWait(250);
    navBar[0].style.transition = 'transform 1s';
    navBar[0].style.transform = 'translateY(0px)';
    console.log('NavBar animation complete');
}

function contactAnimation(parentDivName) {
    console.log(parentDivName)
    var parentDiv = document.getElementById(parentDivName);
    parentDiv.classList.toggle('active');

    navbarAnimation();

    var popup = document.getElementById('popup');
    popup.classList.remove('d-none');
    popup.classList.toggle('active');

    console.log('PopUp animation complete');
}

async function handleSubmit(event) {
    event.preventDefault();
    await submitQuery(event);
}

form.addEventListener("submit", handleSubmit);