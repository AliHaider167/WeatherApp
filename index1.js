let search = document.querySelector('.searchButton');

//Adding Event Listener To Search A City

search.addEventListener('click', async ()=>{

  document.querySelector('.error').style.display = 'none';  //To Remove the Error Message If it is Appreaing

  let city = document.querySelector('.input').value;
  document.querySelector('.input').value = '';
  document.querySelector('.report').style.display='none';


//If The City 

  if(city !== '')
  {
    document.querySelector('.MAIN').style.height = '650px';
    document.querySelector('.loading').style.display='block';

    setTimeout(()=>{
      document.querySelector('.MAIN').style.removeProperty('height');
      document.querySelector('.loading').style.display='none';
      document.querySelector('.report').style.display='block';
      document.querySelector('.WeatherImage').style.removeProperty(marginTop);
      document.querySelector('.WeatherImage').style.removeProperty(marginBottom);

    }, 5000)

  //Sending Request to API to iget Data

    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4f9137bbdbmshad4834adb507f74p1cf47ejsn523c37dd7a42',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      document.querySelector('.City').innerHTML = `<strong>City : </strong>${result.name}`;
      document.querySelector('.feelLike').innerHTML = `<strong>Feel Like :</strong> ${(((result.main.feels_like*100)-27315)/100).toFixed(2)}&deg;C`;
      document.querySelector('.max').innerHTML = `Max Temp. : ${(((result.main.temp_max*100)-27315)/100).toFixed(2)}&deg;C`;
      document.querySelector('.min').innerHTML = `Min Temp. : ${(((result.main.temp_min*100)-27315)/100).toFixed(2)}&deg;C`;
      document.querySelector('.temp').innerHTML = `Temprature : ${(((result.main.temp*100)-27315)/100).toFixed(2)}&deg;C`;

      document.querySelector('.deg').innerHTML = `Degree : ${result.wind.deg}&deg;`; 
      document.querySelector('.speed').innerHTML = `Speed : ${result.wind.speed} m/s`; 

    //Displaying Image Of The Weather

    let clouds = result.clouds.all;
    if(clouds>=1 && clouds<=10)
    {
      document.querySelector('.WeatherImage').src = 'sunny.png';
      document.querySelector('.clouds').innerHTML = 'Weather : Clear/Sunny';
      document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
    }
    else if(clouds>=11 && clouds<=30)
    {
      document.querySelector('.WeatherImage').src = 'SunnyCloudy.png';
      document.querySelector('.clouds').innerHTML = 'Weather : Mostly Sunny/Partly Cloudy';
      document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
    }
    else if(clouds>=31 && clouds<=50)
    {
      document.querySelector('.WeatherImage').style.marginTop = '50px';
      document.querySelector('.WeatherImage').style.marginBottom = '50px';
      document.querySelector('.WeatherImage').src = 'Clouds.png';
      document.querySelector('.clouds').innerHTML = 'Weather : Partly Cloudy';
      document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
    }
    else if(clouds>=51 && clouds<=69)
    {
      document.querySelector('.WeatherImage').src = 'fullCloudy.png';
      document.querySelector('.clouds').innerHTML = 'Weather : 	Mostly Cloudy';
      document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
    }
    else if(clouds>=70 && clouds<=90)
    {
      document.querySelector('.WeatherImage').src = 'rainyCloudy.png';
      document.querySelector('.clouds').innerHTML = 'Weather : Cloudy';
      document.querySelector('.main3').innerHTML = `Description : ${result.weather[0].description}`;
    }
    else if(clouds>=91 && clouds<=100)
    {
      document.querySelector('.WeatherImage').src = 'rainy.png';
      document.querySelector('.clouds').innerHTML = 'Weather : Overcast';
      document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
    }

    } catch (error) {
      document.querySelector('.report').style.display='none';
      document.querySelector('.error').style.display = error;
    }
  }
  else{
    document.querySelector('.error').style.display = 'block';
  }
})


//By Pressing The Enter Key

document.querySelector('.input').addEventListener('keydown', async (event)=>{
  if(event.key === 'Enter')
  {
    document.querySelector('.error').style.display = 'none';  //To Remove the Error Message If it is Appreaing

    let city = document.querySelector('.input').value;
    document.querySelector('.input').value = '';
    document.querySelector('.report').style.display='none';
    
  
  
  //If The City 
  
    if(city !== '' || result.name!==undefined)
    {
      document.querySelector('.MAIN').style.height = '650px';
      document.querySelector('.loading').style.display='block';
  
      setTimeout(()=>{
        document.querySelector('.MAIN').style.removeProperty('height');
        document.querySelector('.loading').style.display='none';
        document.querySelector('.report').style.display='block';
        document.querySelector('.WeatherImage').style.removeProperty(marginTop);
        document.querySelector('.WeatherImage').style.removeProperty(marginBottom);
  
      }, 5000)
  
    //Sending Request to API to iget Data
  
      const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '4f9137bbdbmshad4834adb507f74p1cf47ejsn523c37dd7a42',
          'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.querySelector('.City').innerHTML = `<strong>City : </strong>${result.name}`;
        document.querySelector('.feelLike').innerHTML = `<strong>Feel Like :</strong> ${(((result.main.feels_like*100)-27315)/100).toFixed(2)}&deg;C`;
        document.querySelector('.max').innerHTML = `Max Temp. : ${(((result.main.temp_max*100)-27315)/100).toFixed(2)}&deg;C`;
        document.querySelector('.min').innerHTML = `Min Temp. : ${(((result.main.temp_min*100)-27315)/100).toFixed(2)}&deg;C`;
        document.querySelector('.temp').innerHTML = `Temprature : ${(((result.main.temp*100)-27315)/100).toFixed(2)}&deg;C`;
  
        document.querySelector('.deg').innerHTML = `Degree : ${result.wind.deg}&deg;`; 
        document.querySelector('.speed').innerHTML = `Speed : ${result.wind.speed} m/s`; 
  
      //Displaying Image Of The Weather
  
      let clouds = result.clouds.all;
      if(clouds>=1 && clouds<=10)
      {
        document.querySelector('.WeatherImage').src = 'sunny.png';
        document.querySelector('.clouds').innerHTML = 'Weather : Clear/Sunny';
        document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
      }
      else if(clouds>=11 && clouds<=30)
      {
        document.querySelector('.WeatherImage').src = 'SunnyCloudy.png';
        document.querySelector('.clouds').innerHTML = 'Weather : Mostly Sunny/Partly Cloudy';
        document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
      }
      else if(clouds>=31 && clouds<=50)
      {
        document.querySelector('.WeatherImage').style.marginTop = '50px';
        document.querySelector('.WeatherImage').style.marginBottom = '50px';
        document.querySelector('.WeatherImage').src = 'Clouds.png';
        document.querySelector('.clouds').innerHTML = 'Weather : Partly Cloudy';
        document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
      }
      else if(clouds>=51 && clouds<=69)
      {
        document.querySelector('.WeatherImage').src = 'fullCloudy.png';
        document.querySelector('.clouds').innerHTML = 'Weather : 	Mostly Cloudy';
        document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
      }
      else if(clouds>=70 && clouds<=90)
      {
        document.querySelector('.WeatherImage').src = 'rainyCloudy.png';
        document.querySelector('.clouds').innerHTML = 'Weather : Cloudy';
        document.querySelector('.main3').innerHTML = `Description : ${result.weather[0].description}`;
      }
      else if(clouds>=91 && clouds<=100)
      {
        document.querySelector('.WeatherImage').src = 'rainy.png';
        document.querySelector('.clouds').innerHTML = 'Weather : Overcast';
        document.querySelector('.main3').innerHTML = `Description : ${result.weather.description}`;
      }
  
      } catch (error) {
        document.querySelector('.report').style.display='none';
        document.querySelector('.error').style.display = error;      }
    }
    else{
      document.querySelector('.error').style.display = 'block';
    }
  }
})

