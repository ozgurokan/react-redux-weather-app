import { Sun,Moon } from "../assets/Icons";

import {useSelector,useDispatch} from "react-redux";
import {changeTheme} from "../redux/Weather/weatherSlice";

function ThemeChanger() {

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.weather.theme);


    const setDarkMode = () => {
        dispatch(changeTheme());
        localStorage.setItem("theme", true)

    }
    const setLightMode = () => {
        dispatch(changeTheme());
        localStorage.setItem("theme", false)

    }

    const toggleThemeInput = (e) => {
        if(e.target.checked){
            setDarkMode();
        }else{
            setLightMode();
        };
    };


    return (
    <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleThemeInput}
                defaultChecked={Boolean(theme)}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
    </div>
  )
}

export default ThemeChanger