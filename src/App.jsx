import { useEffect } from 'react';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import { getCitiesData, getWeatherData } from './redux/Weather/weatherMethods';

// component
import Navbar from './components/Navbar';
import MainCard from './components/MainCard';
import Input from './components/Input';

function App() {
  const theme = useSelector((state) => state.weather.theme);
  const city = useSelector((state) => state.weather.city)


  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getWeatherData())
      dispatch(getCitiesData())
  },[city])


  return (
    <div className={"App"} data-theme={theme ? "dark" : "light"}>
        <Navbar/>
      <div className='Content' data-theme={theme ? "dark" : "light"}>
        <Input/>
        <MainCard/>
      </div>
    </div>
  )
}

export default App