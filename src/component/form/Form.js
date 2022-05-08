import React from "react";
import "./form.css"
const Form=(props)=>{


    return (<form onSubmit={props.getweather}>
        <div  className="header-text">Weather App</div>

        <div className="input-field">
                    <div className="relative">
                    <input  name="country" required type="text"/>
                    <div className="label-field">Enter Country</div>
                    <div className="under-line"></div>
                    </div>
        </div>
        <div className="input-field">
            
        <div className="relative">
                    <input  name="city" required type="text"/>
                    <div className="label-field">Enter City</div>
                    <div className="under-line"></div>

                    </div>
            </div>
        <div  className="input-field"><button  className="button">Get Weather</button></div>

    </form>);


}

export default Form;