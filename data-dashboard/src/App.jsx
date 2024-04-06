import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
  const [list, setList] = useState(null)
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchAllData = async () => {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=' + ACCESS_KEY);
        const json = await response.json();
        setList(json);
        console.log(json);
    };
    fetchAllData().catch(console.error);
   }, []);

  // Calculate the mean temperature and mean humidity levels
  let meanTemperature = 0;
  let meanHumidity = 0;
  if (list && list.days) {
    list.days.forEach((day) => {
      meanTemperature += day.temp;
      meanHumidity += day.humidity;
    });
    meanTemperature /= list.days.length;
    meanHumidity /= list.days.length;
  }

  return (
    <div className="whole-page">
      <h1>Weather in London, UK</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      {list && (
        <div>
          <div className='stats'>
            <p>Number of Entries: {list.days.length}</p>
            <p>Mean Temperature: {meanTemperature.toFixed(2)}°C</p>
            <p>Mean Humidity: {meanHumidity.toFixed(2)}%</p>
          </div>
          <ul>
            {list.days.map((day) => (
              <li key={day.datetimeEpoch}>
                <p>Date: {day.datetime}</p>
                <p>Temperature: {day.temp}°C</p>
                <p>Feels Like: {day.feelslike}°C</p>
                <p>Humidity: {day.humidity}%</p>
                <p>Precipitation: {day.precip} mm</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
