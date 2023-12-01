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

const createSlider = () => {
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    wrapAround: true,
    cellAlign: 'center',
    lazyLoad: true,
    contain: true
    });
}

const createSoup = async () => {
    let soup = document.getElementById('soup')
    document.getElementById("soup-container").classList.add("view");
    soup.innerHTML = ""
    let soupFood = await getSoup();
    soup.innerHTML += soupFood;
}

const createMain = async () => {
    let soup = document.getElementById('main')
    document.getElementById("main-container").classList.add("view");
    soup.innerHTML = "";
    let mainFood = await getMain();
    soup.innerHTML += mainFood
}

const createSalad = async () => {
    let soup = document.getElementById('salad')
    document.getElementById("salad-container").classList.add("view");
    soup.innerHTML = ""
    soup.innerHTML += "супчик"
}

const createAll = () => {
    createSalad();
    createMain();
    createSoup();
}

createSlider();