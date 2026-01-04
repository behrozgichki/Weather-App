

const api = "https://api.weatherapi.com/v1/current.json?key=7fd42d84a2a64ea4920164525260301&q=London&aqi=yes"
const apiKey = "7fd42d84a2a64ea4920164525260301"

const form = document.querySelector("#form")
const div = document.querySelector("#container")
const input = document.querySelector("#input")


form.addEventListener("submit", (data) => {
    data.preventDefault()
    console.log(input.value);

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=yes`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            div.innerHTML += `<div class="card-left">
          <div class="city">${res.location.name}</div>
          <div class="date">
            ${res.location.localtime}, ${res.location.country}
          </div>
          <div class="temp">${res.current.temp_c}°C</div>
          <div class="condition">${res.current.condition.text}</div>
        </div>

        <div class="card-right">
          <img src="https:${res.current.condition.icon}" alt="icon">
        </div>`

        })
        .catch((err) => {
            console.error(err);

        })
})
