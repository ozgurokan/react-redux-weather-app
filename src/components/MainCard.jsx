import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import CardList from "./CardList";



function MainCard() {


    const data = useSelector((state) => state.weather.data);
    const isLoading = useSelector((state) => state.weather.isLoadingWeather);



    return (
        
        <div className='main-card'>
            {
                isLoading ? <div>Loading...</div> :  
                <>
                <div className='main-card-date day-name'>
                    {new Date(data[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}
                </div>
    
                <div className='main-card-highlight'>
    
                    <div className="main-card-firts">
                        <div className='main-card-icon'><img src={`https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`} alt="s" /></div>
                    </div>
    
                    <div className='main-card-second'>
                        <div className='main-card-heat'> {data[0].main.feels_like.toFixed(1)} °C </div>
                    </div>
    
                    <div className="main-card-third">
                        <div className='main-card-wind'><span> Wind: {data[0].wind.speed}</span> kmph</div>
                        <div className="main-card-humidity"> <span> Humidity : {data[0].main.humidity}%</span></div>
                        <div className="main-card-pressure"><span> Pressure: {data[0].main.pressure}</span> mb</div>
                    </div>
                </div>


                    <CardList weather={data} />
                </>
            }
        </div>
  )
}

export default MainCard