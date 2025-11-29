import https from 'https';
import { createInterface } from 'readline/promises';
import chalk from 'chalk';

const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});

const apiKey='';
const Base_Url = '';


const getWeather = async(city) =>{
    
  const url = `${Base_Url}&q=${city}&appid=${apiKey}`;
 console.log("🔎 Requesting URL:", url); // Debug

  try {
    const response =  await fetch(url);

    if (!response.ok) {
        throw new Error ('City not found. Please check the city name :')
    }
    const weatherData = await response.json();

    console.log('\nWeather Information:');
    console.log(`City:${weatherData.name}`);
    console.log(`Temperature:${weatherData.main.temp}°C`);
    console.log(`Description:${weatherData.weather[0].description}`);
    console.log(`Humidity:${weatherData.main.humidity}%`);
    console.log(`wind speed: ${weatherData.wind.speed}m/s\n`);

  } catch (error) {
    console.log(error)
  }
}

const city = await rl.question("Enter a city name to get it's weather: ");

await getWeather(city);
rl.close();