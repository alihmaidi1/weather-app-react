import './App.css';
import Weather from "../weather/weather";
import Form from "../form/Form";
import { useState } from 'react';

function App() {
  let api_key='caddac25ff9e05cb612e28cb3d715219';
  let [state,setstate]=useState({
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'initial'
  });
  let getWeather= async(e)=>{
      e.preventDefault();
      let city=e.target.elements.city.value;
      let country=e.target.elements.country.value;
      if(city &&country){
              let lonlat= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=caddac25ff9e05cb612e28cb3d715219`)
              let data=await lonlat.json();
              let [lon,lat]=[data[0].lon,data[0].lat]
              let weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`);
              data= await weather.json();
              setstate({
                tempreature:data.main.temp,
                city:city,
                country:country,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:""
              });

      }else{

        setstate({
          tempreature:'',
          city:'',
          country:'',
          humidity:'',
          description:'',
          error:"error"
        });
      }



      }

  return (
    <div className="App">
      
      {(state.error=="initial")? <Form getweather={getWeather}/>:<Weather
              tempreature={state.tempreature}
              city={state.city}
              country={state.country}
              humidity={state.humidity}
              description={state.description}
              error={state.error}
              setstate={setstate}
      />
}

      
    </div>
  );
}

export default App;
