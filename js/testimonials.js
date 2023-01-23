
var clients_text_0 =
"I ordered cleaning after moving to a new office. They cleaned the office from floor to ceiling, no complaints about the quality of cleaning. Everything was great. The cleaners are very polite in communication.";
var clients_text_1 =
"Everything is great! We liked everything. Different cleaning companies came to us, including those founded by expats, but the service was still 'Georgian'. Your cleaner did everything perfectly! She even cleaned the wall by the stove that the other companies' cleaners were afraid to touch. Thank you!";
var clients_text_2 =
"The cleaning went at a very high level. The cleaner was very polite and the apartment smelled really clean after. All surfaces are very clean and the plumbing is like nothing I have seen since moving in. We will continue to use your service, a salvation for the modern housewife";
var clients_text_3 =
"Thank you so much! Everything is simply perfect! Our apartment has never been as clean as after your visit. It is absolutely worth it to collaborate with you monthly. Thank you! We will recommend your services to everyone!";
var clients_text_4 =
"This is really the first time I've been happy with a cleaning when ordering a cleaning service in Tbilisi! The possibility to work legally helps me to trust and try. Quality of service standards is really high as the communication with the staff members. I will recommend your service to everyone!";
var clients_text_5 =
"Best сleaning experience. We usually ask for help from our housekeeper, but a regular cleaning with professional cleaners will allow us to remove all deep dirt. We will definitely order the service for the next month.";

var images = document.querySelectorAll(".clients-images");
var imgParent = document.querySelector(".clients-img");
var text = document.querySelector(".client-text");
var clientsName0 = document.querySelector(".clients-text-0");
var clientsName1 = document.querySelector(".clients-text-1");
var clientsName2 = document.querySelector(".clients-text-2");
var clientsName3 = document.querySelector(".clients-text-3");
var clientsName4 = document.querySelector(".clients-text-4");
var clientsName5 = document.querySelector(".clients-text-5");

images.forEach(function (img, index) {
img.addEventListener("click", function () {
    var activeImg = document.querySelector(".clients-images.active");
    var activeCard = document.querySelector(".clients-card.active");
    if (activeImg) {
        activeImg.classList.remove("active");
        activeCard.classList.remove("active");
        clientsName0.innerHTML = "";
        clientsName1.innerHTML = "";
        clientsName2.innerHTML = "";
        clientsName3.innerHTML = "";
        clientsName4.innerHTML = "";
        clientsName5.innerHTML = "";
    }
    this.classList.add("active");
    var card = this.parentNode;
    card.classList.add("active");
    var target = imgParent.children[2];
    if (card.nextSibling) {
        imgParent.insertBefore(card, target);
    }
    switch (index) {
        case 0:
            text.innerHTML = clients_text_0;
            clientsName0.innerHTML =
                "<strong>Santiago</strong><br>Deep Cleaning<br>(apartment)";
            break;
        case 1:
            text.innerHTML = clients_text_1;
            clientsName1.innerHTML =
                "<strong>Angelina</strong><br>Deep Cleaning<br>(apartment)";
            break;
        case 2:
            text.innerHTML = clients_text_2;
            clientsName2.innerHTML =
                "<strong>Maria</strong><br>Standard Cleaning<br>(apartment)";
            break;
        case 3:
            text.innerHTML = clients_text_3;
            clientsName3.innerHTML =
                "<strong>Natalia</strong><br>Standard Cleaning<br>(apartment)";
            break;
        case 4:
            text.innerHTML = clients_text_4;
            clientsName4.innerHTML =
                "<strong>Lubov</strong><br>Standard Cleaning<br>(apartment)";
            break;
        case 5:
            text.innerHTML = clients_text_5;
            clientsName5.innerHTML =
                "<strong>Shorena</strong><br>Deep Cleaning<br>(apartment)";
            break;
    }
});
});