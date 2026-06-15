// Welcome Message

console.log("Welcome to LifeSaver Blood Donation Website");



// Become a Donor Button

const donorBtn = document.querySelector(".donor-btn");

if (donorBtn) {

    donorBtn.addEventListener("click", function () {

        alert("Thank you for choosing to become a blood donor!");

    });

}



// Request Blood Button

const requestBtn = document.querySelector(".request-btn");

if (requestBtn) {

    requestBtn.addEventListener("click", function () {

        alert("Blood request service will be available soon.");

    });

}



// Emergency Button

const emergencyBtn = document.querySelector(".emergency button");

if (emergencyBtn) {

    emergencyBtn.addEventListener("click", function () {

        alert("Emergency support is available 24×7.");

    });

}



// Blood Group Cards

const bloodCards = document.querySelectorAll(".blood-card");

bloodCards.forEach(card => {

    card.addEventListener("click", function () {

        alert("Selected Blood Group : " + this.innerText);

    });

});



// Social Icons

const socialIcons = document.querySelectorAll(".social i");

socialIcons.forEach(icon => {

    icon.addEventListener("click", function () {

        alert("Social media links will be added later.");

    });

});



// Back To Top Button

let topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});



if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}