let currTemp = document.getElementById("currTemp")
let feelsLike = document.getElementById("feelsLike")
let cond = document.getElementById("cond")
let hum = document.getElementById("hum")
let cityName = document.getElementById("cityName")
let grabBTN = document.getElementById("grab")
let city = document.getElementById("input")
let logic = 0

const search = city =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aff14ff0dbc9e2ef274eae03fa84a263`).then(response =>{
        return response.json()
    }).then(data =>{
        if(data.name === undefined){
            currTemp.innerHTML = "Invalid Location"
        } else {
            cityName.innerHTML = `${data.name}`
            cond.innerHTML = `Conditions: ${data.weather[0].description}, ${data.clouds.all}% cloud coverage`
            currTemp.innerHTML = `Temperature: ${data.main.temp}°C`
            feelsLike.innerHTML = `Feels like: ${data.main.feels_like}°C`
            hum.innerHTML = `Humidity: ${data.main.humidity}%`
        }
    })
}


const grab = () =>{
    
    let datas = document.querySelectorAll(".data")    
    if (logic == 0){
        city.style.display = "none"
        datas.forEach(data =>{
            data.style.display = "block"
            })
                search(city.value)
                    logic = 1
                        grabBTN.innerHTML = "Reset"
    } else {
        city.style.display = "block"
        datas.forEach(data =>{
            data.style.display = "none"
            })
            logic = 0
                city.value = ''
                    grabBTN.innerHTML = "Reset"
    }
    console.log(logic)
}


    grabBTN.onmouseenter = function(){
        if(cityName.innerHTML != "" && currTemp.style.display == "none" && city.value == ''){
        grabBTN.innerHTML = cityName.innerHTML
    }else
    grabBTN.onmouseleave = function(){
        if(currTemp.style.display == "block"){
            grabBTN.innerHTML = "Reset"
        } else {
            grabBTN.innerHTML = "Grab"
        }   
    }
}
