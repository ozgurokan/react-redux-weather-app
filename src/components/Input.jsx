import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {changeCity} from "../redux/Weather/weatherSlice"

function Input() {
    const dispatch = useDispatch();
    const cityList = useSelector((state) => state.weather.cityList);
    const city = useSelector((state)=> state.weather.city)
    const isLoadingCity = useSelector((state) => state.weather.isLoadingCity )


  return (

        isLoadingCity ? "loading" : 
        
        <div className='input'>        
        <select  id="location" value={city} onChange={(e) => dispatch(changeCity(e.target.value)) }>
            {
                cityList.map((city, id) => {
                    return <option className='option' key={id} value={city.name}>{city.name}</option>
                })
            }
        </select>
        

        

    </div>
  )
}

export default Input