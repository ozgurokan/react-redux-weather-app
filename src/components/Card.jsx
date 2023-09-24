import React from 'react'


function Card({element}) {
  return (
    <div className='day'>
        <div className="day-name">
                {new Date(element.dt_txt).toLocaleString('en-us', {weekday:'long'})}
        </div>
        <div className='day-info'>
            <div className="day-list-icon">
            <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} alt="" /> 
            </div>
            <div className="day-list-temp">
                <p className="maxTemp">{(element.main.temp_max).toFixed(1)} °C</p>
            </div>
        </div>
    </div>
  )
}

export default Card