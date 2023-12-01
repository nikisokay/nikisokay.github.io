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
    // cellAlign: 'center',
    contain: true
    });


}

createSlider();
getFood()