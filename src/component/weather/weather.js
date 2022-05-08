import React from "react";
import "./weather.css";
import "../../assets/fontawesome/css/all.min.css"
const Weather=(props)=>{

    let backhome=()=>{

        props.setstate({error:"initial"})

    }

    return <div>

    <div className="header-output"><i onClick={backhome} className="fa fa-arrow-left"></i> Weather App</div>

    
    
    {(props.error=="error")?<div>Error</div>:(<div>

        {(props.description=="clear sky")?<img className="img-weather" src="./img/3.png"/>:""}
        {(props.description=="few clouds")?<img className="img-weather" src="./img/2.png"/>:""}
        {(props.description=="scattered clouds"||props.description=="broken clouds")?<img className="img-weather" src="./img/5.png"/>:""}
        {(props.description=="shower rain"||props.description=="rain")?<img className="img-weather" src="./img/4.png"/>:""}
        {(props.description=="thunderstorm")?<img className="img-weather" src="./img/6.png"/>:""}
        {(props.description=="snow")?<img className="img-weather" src="./img/7.png"/>:""}
        <div className="tempreture-head">{(props.tempreature - 273).toFixed(2)}<sup>o</sup> C</div>
        <div className="center-element">{props.description}</div>
        
        <div>
    <button className="button-icon"><i class="fas fa-water"></i> {props.humidity} Humidity</button>
            <button className="button-icon"><i  className="fas fa-map-marker-alt"></i> {props.city}, {props.country}</button>
        </div>
    </div>)}

    </div>;


}


export default Weather;