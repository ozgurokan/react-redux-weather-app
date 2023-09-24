import {createSlice} from "@reduxjs/toolkit";
import {getCitiesData, getWeatherData} from "./weatherMethods"

const themeLocal =  localStorage.getItem("theme") === "true" ? true : false;

export const weatherSlice = createSlice({
    name: "weather",
    initialState : {
        data : [],
        cityList : [],
        isLoadingCity : true,
        isLoadingWeather : true,
        error : null,
        city : "Adana",
        theme : themeLocal,
    },
    reducers :{
        changeCity : (state,action) => {
            state.city = action.payload;
        },
        changeTheme : (state) => {
            state.theme = !state.theme;
        }

    },
    extraReducers :(builder) => {
        builder.addCase(getWeatherData.pending,(state) => {
            state.isLoadingWeather = true;
        }),
        builder.addCase(getWeatherData.fulfilled, (state,action) => {
            const preData = action.payload;

            // formating data
            const dayDataList = []
            let time = preData.list[0].dt_txt.split(" ")[1];
            preData.list.map((day) => {
                if(time == day.dt_txt.split(" ")[1]){
                    dayDataList.push(day);
                }
            })
            state.data = dayDataList;
            state.isLoadingWeather = false;
        }),
        builder.addCase(getWeatherData.rejected, (state,action) => {
            state.error = action.error.message;
            state.isLoadingWeather = false;
        }),
        builder.addCase(getCitiesData.pending,(state) => {
            state.isLoadingCity = true;
        }),
        builder.addCase(getCitiesData.fulfilled, (state,action) => {
            state.cityList = action.payload;
            state.isLoadingCity = false;
        }),
        builder.addCase(getCitiesData.rejected, (state,action) => {
            state.error = action.error.message;
            state.isLoadingCity = false;
        })
    }
})


export const {changeCity,changeTheme} = weatherSlice.actions;
export default weatherSlice.reducer;