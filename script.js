const dailyneeds = document.querySelector(`.daily-needs-card-container`);
const construction = document.querySelector(`.construction-card-container`);
const consultancy = document.querySelector(`.consultancy-card-container`);
const household = document.querySelector(`.household-card-container`);
const maintenance = document.querySelector(`.house-maintenance-card-container`);
const travels = document.querySelector(`.tour-travel-card-container`);
const dailyprovider = document.querySelector(`.dailyneeds-card-container`);
const dance = document.querySelector(`.dance-card-container`);
const health = document.querySelector(`.health-card-container`);
const education = document.querySelector(`.education-card-container`);
const food = document.querySelector(`.food-card-container`);
const sports = document.querySelector(`.sports-card-container`);
const constructions = document.querySelector(`.constructions-card-container`);
const eventmanagement = document.querySelector(`.eventmanagement-card-container`);
const gym = document.querySelector(`.gym-card-container`);
const consultancys = document.querySelector(`.consultancys-card-container`);
const beauty = document.querySelector(`.beauty-card-container`);
const furniture = document.querySelector(`.furniture-card-container`);
const books = document.querySelector(`.books-card-container`);
const internet = document.querySelector(`.internet-card-container`);
const realestate = document.querySelector(`.realestate-card-container`);
const hasndcrafts = document.querySelector(`.hasndcrafts-card-container`);
const headerTop = document.querySelector(`.header-bottom`);



let cards = "";
let letters = `QWERTYUIOPLKJHGFDSAZXCVBNM`;

function createCards(container, img, num) {
    for (let i = 0; i < num; i++) {
        cards += `<div class="item card">
                        <img src="/img/${img}.png" alt="">
                        <p>Name and Description</p>
                    </div>
                    `
    }
    container.innerHTML = cards;
    cards = ""
}

function createCardsWithoutImg(container, num, start) {
    for (let i = 0; i < num; i++) {
        cards += `<div class="card">
                        <div class="thumbnail" style="background-color:hsl(${390+(i*15)+(start*10)}, 79%, 68%);">${letters[i+start]}</div>
                        <p>Name and Description</p>
                    </div>
                    `
    }
    container.innerHTML = cards;
    cards = ""
}

createCards(dailyneeds, `juice`, 40);
createCards(construction, `brick`, 30);
createCards(consultancy, `consultancy`, 30);
createCardsWithoutImg(household, 3, 0)
createCardsWithoutImg(maintenance, 9, 5)
createCardsWithoutImg(travels, 4, 10)
createCardsWithoutImg(dailyprovider, 13, 8);
createCardsWithoutImg(dance, 3, 20);
createCardsWithoutImg(health, 22, 0);
createCardsWithoutImg(education, 16, 4);

createCardsWithoutImg(food, 2, 4);
createCardsWithoutImg(sports, 2, 22);
createCardsWithoutImg(constructions, 17, 2);
createCardsWithoutImg(eventmanagement, 20, 1);
createCardsWithoutImg(gym, 12, 7);
createCardsWithoutImg(consultancys, 6, 14);
createCardsWithoutImg(beauty, 16, 4);
createCardsWithoutImg(furniture, 18, 3);
createCardsWithoutImg(books, 10, 11);
createCardsWithoutImg(internet, 3, 21);


$(document).ready(function () {

    $("#hero-carousal").owlCarousel({

        autoplay: true,
        autoplayTimeout: 2000,
        slideSpeed: 100,
        items: 1,
        rewind :true
    });

    $('.owl-carousel').owlCarousel({
        margin: 5,
        items: 4.1,
        dots: false,
        slideBy: 6,
        paginationSpeed: 500
    })

});

window.onscroll = function() {stickTop()};

let sticky = headerTop.offsetTop;
function stickTop() {
    if (window.pageYOffset >= sticky) {
        headerTop.classList.add("sticky")
      } else {
        headerTop.classList.remove("sticky");
      }
}
