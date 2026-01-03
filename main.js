const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

async function start() {
    try {
        const weatherDataPromise = await fetch(
            "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
        );
        const weatherData = await weatherDataPromise.json();

        const ourTemperature =
            weatherData.properties.periods[0].temperature;

        document.querySelector("#temperature-output").textContent =
            ourTemperature;
    } catch (error) {
        console.error(error);
    }
}

start();

async function petsArea() {
    const petPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
    const petsData = await petPromise.json()
    console.log(petsData)
    petsData.forEach(pet => {
        const clone = template.content.cloneNode(true)

        clone.querySelector("h3").textContent = pet.name

        wrapper.appendChild(clone)
    })
    document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea() 
