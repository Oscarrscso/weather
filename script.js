const search = city =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aff14ff0dbc9e2ef274eae03fa84a263`).then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data.main.temp);
    })
}
