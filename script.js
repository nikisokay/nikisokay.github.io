const fetchFood = async () => {

    let food = await fetch("food.json", {
        headers : {
            "content-type" : "application/json"
        }
    })

    const result = await food.json()
    return result
}

const getFood = async () => {
    let food = await fetchFood()
    console.log(food.garnirs.length)
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

const createSoup = () => {
    let soup = document.getElementById('soup')
    document.getElementById("soup-container").classList.add("view");
    soup.innerHTML = ""
    soup.innerHTML += "супчик"
}

const createMain = () => {
    let soup = document.getElementById('main')
    document.getElementById("main-container").classList.add("view");
    soup.innerHTML = ""
    soup.innerHTML += "супчик"
}

const createSalad = () => {
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
getFood()