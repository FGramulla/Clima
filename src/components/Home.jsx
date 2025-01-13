import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/Home.css'; // Archivo CSS para los estilos

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // Para la redirección

  const API_KEY = '9f4b20918fdf1d53d1a26ca53173470b'; // Reemplaza con tu API key

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data');
    }
    setLoading(false);
  };

  const handleWeatherItemClick = () => {
    navigate('/details', { state: { weatherData } }); // Envia weatherData a Details
  };

  const fetchCitySuggestions = async (inputValue) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${API_KEY}`
      );
      setSuggestions(response.data);
    } catch (error) {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);
    if (inputValue.length > 2) {
      fetchCitySuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.name);
    fetchWeather(suggestion.name);
    setSuggestions([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && city.length > 0) {
      fetchWeather(city);
    }
  };

  // Función para determinar el color de la temperatura
  const getTemperatureColor = (temp) => {
    if (temp <= 0) return 'darkblue';
    if (temp > 0 && temp <= 15) return 'blue';
    if (temp > 15 && temp <= 20) return 'lightblue';
    if (temp > 20 && temp <= 35) return 'orange';
    return 'red';
  };

  // Función para determinar el color del viento
  const getWindColor = (speed) => {
    if (speed <= 1) return 'lightgreen';
    if (speed > 1 && speed <= 5) return 'green';
    if (speed > 5 && speed <= 10) return 'yellow';
    return 'red';
  };

  // Función para determinar el color de la humedad
  const getHumidityColor = (humidity) => {
    if (humidity < 30) return 'lightblue';
    if (humidity >= 30 && humidity <= 60) return 'blue';
    return 'darkblue';
  };

  return (
    <div className="home-container">
      {/* Video de fondo */}
      <video autoPlay muted loop className="bg-video">
        <source src="/video/fondo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="weather-box">
        <h1 className="title">Weather in {city || '...'}</h1>
        <div className="input-box">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter city"
            className="city-input"
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-item"
                >
                  <img
                    src={`https://flagcdn.com/16x12/${suggestion.country.toLowerCase()}.png`}
                    alt={`${suggestion.country} flag`}
                    className="flag-icon"
                  />{' '}
                  {suggestion.name}, {suggestion.country}
                </li>
              ))}
            </ul>
          )}
        </div>

        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : error ? (
          <p className="error-text">{error}</p>
        ) : (
          weatherData && (
            <div className="weather-info">
  <div className="weather-item" onClick={handleWeatherItemClick}>
    <span className="label">Temperature</span>
    <span
      className="value-temp"
      style={{ color: getTemperatureColor(weatherData.main.temp) }}
    >
      {weatherData.main.temp}°C
    </span>
    <p className="details-text">Details</p>
  </div>
  <div className="weather-item" onClick={handleWeatherItemClick}>
    <span className="label">Weather</span>
    <span className="value-weather">{weatherData.weather[0].description}</span>
    <p className="details-text">Details</p>
  </div>
  <div className="weather-item" onClick={handleWeatherItemClick}>
    <span className="label">Humidity</span>
    <span
      className="value-humidity"
      style={{ color: getHumidityColor(weatherData.main.humidity) }}
    >
      {weatherData.main.humidity}%
    </span>
    <p className="details-text">Details</p>
  </div>
  <div className="weather-item" onClick={handleWeatherItemClick}>
    <span className="label">Wind Speed</span>
    <span
      className="value-wind"
      style={{ color: getWindColor(weatherData.wind.speed) }}
    >
      {weatherData.wind.speed} m/s
    </span>
      <p className="details-text">Details</p>
  </div>
</div>

          )
        )}
      </div>
    </div>
  );
}

export default Home;
