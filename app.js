

const api = "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=ac9e8f6b0504224f697f73b9256a39b1&units=metric"
const apiKey = "ac9e8f6b0504224f697f73b9256a39b1"

const form = document.querySelector("#form")
const div = document.querySelector("#container")
const input = document.querySelector("#input")


form.addEventListener("submit", (data) => {
    data.preventDefault()
    console.log(input.value);

    {/* <></> */ }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const cityDateTime = new Date((res.dt + res.timezone) * 1000);
            div.innerHTML += `<h1>${res.name} , ${res.sys.country}</h1>
        <h1>${res.main.temp + " °C"}</h1>
        <p>${cityDateTime.toLocaleString()}</p>`

        })
        .catch((err) => {
            console.error(err);

        })
})
