
  
 
  const options ={
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': 'c64710285bmsh8422d845b0a96f7p12ca05jsn88f832fe1499',
	  'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
  };

	const getweather = (city)=>{
		cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
	.then(response => response.json())
	.then((response)=>{
		console.log(response)
		temp.innerHTML = response.temp;
		temp1.innerHTML = response.temp;
		cloud_pct.innerHTML  = response.cloud_pct 
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp-6
		max_temp.innerHTML = response.max_temp+3
		wind_speed.innerHTML = response.wind_speed+6
		wind_speed1.innerHTML = response.wind_speed+6
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})
getweather("Jalore")