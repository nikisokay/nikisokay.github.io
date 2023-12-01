function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const fetchFood = async () => {

    let food = await fetch("food.json", {
        headers : {
            "content-type" : "application/json"
        }
    })

    const result = await food.json()
    return result
}

const printFood = async () => {
    let food = await fetchFood();

    let garnirContainer = document.getElementById("garnirs")
    let foodType = food.garnirs;
    foodType = Object.values(foodType);
    Object.keys(foodType).map(function (key) {
        garnirContainer.innerHTML += `<span class="foodItem">${foodType[key]["garnir"]}</span>`
    });

    let meatContainer = document.getElementById("meats");
    foodType = food.meats;
    foodType = Object.values(foodType);
    Object.keys(foodType).map(function (key) {
        meatContainer.innerHTML += `<span class="foodItem">${foodType[key]["meat"]}</span>`
    });

    let saladContainer = document.getElementById("salads");
    foodType = food.salads;
    foodType = Object.values(foodType);
    Object.keys(foodType).map(function (key) {
        saladContainer.innerHTML += `<span class="foodItem">${foodType[key]["salad"]}</span>`
    });

    let soupContainer = document.getElementById("soups");
    foodType = food.soups;
    foodType = Object.values(foodType);
    Object.keys(foodType).map(function (key) {
        soupContainer.innerHTML += `<span class="foodItem">${foodType[key]["soup"]}</span>`
    });

}

const getGarnir = async () => {
    let food = await fetchFood();
    let garnirs = food.garnirs;
    let garnirsLen = food.garnirs.length - 1;
    let randomGarnir = garnirs[getRandomInt(garnirsLen)]["garnir"];
    return randomGarnir
}

const getMeat = async () => {
    let food = await fetchFood();
    let meats = food.meats;
    let meatsLen = food.meats.length - 1;
    let randomMeat = meats[getRandomInt(meatsLen)]["meat"];
    return randomMeat
}

const getMain = async () => {
    let meat = await getMeat();
    let garnir = await getGarnir();
    let mainFood = garnir + " + " + meat;
    return mainFood;
}

const getSoup = async () => {
    let food = await fetchFood();
    let soups = food.soups;
    let soupsLen = food.soups.length - 1;
    let randomSoup = soups[getRandomInt(soupsLen)]["soup"];
    return randomSoup
}

const getSalad = async () => {
    let food = await fetchFood();
    let salads = food.salads;
    let saladsLen = salads.length - 1;
    let randomSalad = salads[getRandomInt(saladsLen)]["salad"];
    return randomSalad
}

const createSoup = async () => {
    let soup = document.getElementById('soup')
    document.getElementById("soup-container").classList.add("view");
    let soupFood = await getSoup();
    soup.innerHTML = soupFood;
}

const createMain = async () => {
    let soup = document.getElementById('main')
    document.getElementById("main-container").classList.add("view");
    let mainFood = await getMain();
    soup.innerHTML = mainFood
}

const createSalad = async () => {
    let soup = document.getElementById('salad')
    document.getElementById("salad-container").classList.add("view");
    let saladFood = await getSalad();
    soup.innerHTML = saladFood
}

const createAll = () => {
    createSalad();
    createMain();
    createSoup();
}

printFood();

const createSlider = () => {
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    wrapAround: true,
    cellAlign: 'center',
    lazyLoad: true,
    contain: true
    });
}
createSlider();
