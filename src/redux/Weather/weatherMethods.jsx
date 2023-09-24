import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getWeatherData = createAsyncThunk("weather/getWeatherData", async (_,{getState}) => {
    const city = getState().weather.city;
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=702de8856bc6a34b2d2e96ba89337678&units=metric`);
    const data =  res.data;
    return data;
});

export const getCitiesData = createAsyncThunk("weather/getCitiesData", async () => {
    const res = await axios.get("https://turkiyeapi.cyclic.app/api/v1/provinces?&limit=81");
    const data = await res.data.data;
    return data;
})