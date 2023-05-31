import "bootstrap/dist/css/bootstrap.min.css"
import {useEffect, useState} from "react";
import axios from "axios"
import './App.css';

function App() {

  const APIkey = "63d8d1604b04ddd6341df88625f038fc"
  const[data, setData] = useState({})
  const[InputCityName, setCityName] = useState()

  const getWeatherDetails = (CityName) => {
    if(!CityName)
      return
      const API = "https://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&appid=" + APIkey
      axios.get(API).then((res) => {
        console.log("response", res.data)
        setData(res.data)
      }).catch((err) => {
        console.log("error", err)
      })  
    }

    const handleChangeInput = (e) => {
      setCityName(e.target.value)
    }      
    const handleSearch = () => {
      getWeatherDetails(InputCityName)
    }
    useEffect(()=>{
      getWeatherDetails("delhi")
    }, [])
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
<div className="d-grid gap-3 col-4 mt-4">
<input type="text" className="form-control" value={InputCityName} onChange={handleChangeInput}/>
<button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
</div>
    </div>

    <div className="col-md-12 text-center mt-5">
    <div className="shadow rounded wetherResultBox">
      <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="" className="weatherIcon" />

      <h5 className="weatherCity">{data?.name}</h5>
      <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)} °C</h6>
    </div>
    </div>

  </div>
  );
}

export default App;
