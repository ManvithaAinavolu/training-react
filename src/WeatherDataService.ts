import axios from 'axios';

const API_KEY = '5dc192f00954dc7db608658a5230b5a6';

export interface WeatherData {
  description: string;
  temp: number;
  humidity: number;
}

export const getWeather = async (inputValue: string): Promise<WeatherData> => {
  try {
    const results = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: inputValue,
        appid: API_KEY,
        units: 'metric' 
      }
    });

    console.log(results);

    return {
      description: results.data.weather[0].description,
      temp: results.data.main.temp,
      humidity: results.data.main.humidity
    };
  } catch (error) {
    console.error("Error fetching data", error);
    throw error; 
  }
};
