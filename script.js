const apiKey = "0b4b0cb647e14129d6c99f2aff6270af"
const input = document.querySelector("input")
const button = document.querySelector("button")
let cityName = document.querySelector(".cityName")
let temp = document.querySelector(".temp")
let windSpeed = document.querySelector(".windSpeed")
let humid = document.querySelector(".humid")

function stringToIntegerAndFirstTwoValues(str) {
    // Convert string to integer
    var integer = parseInt(str, 10); // The second argument, 10, specifies the base (decimal)

    // Check if the conversion was successful (i.e., the result is not NaN)
    if (isNaN(integer)) {
        return NaN;
    }

    // Convert the integer to a string to easily get the first two digits
    var firstTwoDigits = integer.toString().slice(0, 2);

    // Convert the first two digits back to an integer
    var firstTwoValues = parseInt(firstTwoDigits, 10);

    return firstTwoValues;
}


button.addEventListener("click", () =>{
    let city = ""
    city=input.value
    cityName.innerHTML = city
    
    // console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((res) => res.json()).then(res => {
        
        temp.innerHTML = `${stringToIntegerAndFirstTwoValues(res.main.temp)}°C`
        windSpeed.innerHTML = `${res.wind.speed} km/h`
        humid.innerHTML = `${res.main.humidity} %`
        console.log(res);
        const image = document.querySelector("img")

        switch (res.weather[0].main) {
            case "Clear":
                image.src = "clear.png"
                break;
            case "Clouds":
                image.src = "cloud.png"
                break;

            case "Mist":
                image.src = "mist.png"
                break;
            case "Haze":
                image.src = "mist.png"
                break;
            case "Rain":
                image.src = "rain.png"
                break;
            case "Snow":
                image.src = "snow.png"
                break;
        
            default:
                break;

    

        
}})

    
})


