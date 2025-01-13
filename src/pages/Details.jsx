import { useLocation } from 'react-router-dom';
import { FaThermometerHalf, FaCloudSun, FaTint, FaWind } from 'react-icons/fa'; // Importamos los íconos necesarios
import '../styles/Details.css';

function Details() {
  const location = useLocation();
  const { weatherData } = location.state || {}; // Obtén los datos de weatherData

  if (!weatherData) {
    return <p>No weather data available</p>;
  }

  // Función para determinar el video según la descripción del clima
  const getVideoForWeather = (description) => {
    const weatherDescription = description.toLowerCase();

    if (weatherDescription.includes('clear sky')) {
      return '/video/clear-sky.mp4'; // Video de cielo despejado
    } else if (weatherDescription.includes('few clouds')) {
      return '/video/few-clouds.mp4'; // Video de pocas nubes
    } else if (weatherDescription.includes('scattered clouds') || weatherDescription.includes('overcast clouds')) {
      return '/video/scattered-clouds.mp4'; // Video de nubes dispersas
    } else if (weatherDescription.includes('broken clouds')) {
      return '/video/broken-clouds.mp4'; // Video de nubes rotas
    } else if (weatherDescription.includes('rain') || weatherDescription.includes('shower rain')) {
      return '/video/rain.mp4'; // Video de lluvia
    } else if (weatherDescription.includes('thunderstorm')) {
      return '/video/thunderstorm.mp4'; // Video de tormenta
    } else if (weatherDescription.includes('snow')) {
      return '/video/snow.mp4'; // Video de nieve
    } else if (weatherDescription.includes('mist')) {
      return '/video/mist.mp4'; // Video de neblina
    } else {
      return '/video/fondo.mp4'; // Video por defecto
    }
  };

  const videoSource = getVideoForWeather(weatherData.weather[0].description);

  return (
    <div className="details-container">
      {/* Video de fondo que cambia según el clima */}
      <video autoPlay muted loop className="bg-video-details">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Nombre del lugar y bandera */}
      <div className="location-header">
        <img
          src={`https://flagcdn.com/64x48/${weatherData.sys.country.toLowerCase()}.png`}
          alt={`${weatherData.sys.country} flag`}
          className="country-flag"
        />
        <h1 className="location-name">
          {weatherData.name}, {weatherData.sys.country}
        </h1>
      </div>

      {/* Información del clima */}
      <div className="details-content">
        <div className="details-card">
          <FaThermometerHalf className="weather-icon" />
          <h4>Temperature</h4>
          <p>{weatherData.main.temp}°C</p>
        </div>

        <div className="details-card">
          <FaCloudSun className="weather-icon" />
          <h4>Weather</h4>
          <p>{weatherData.weather[0].description}</p>
        </div>

        <div className="details-card">
          <FaTint className="weather-icon" />
          <h4>Humidity</h4>
          <p>{weatherData.main.humidity}%</p>
        </div>

        <div className="details-card">
          <FaWind className="weather-icon" />
          <h4>Wind Speed</h4>
          <p>{weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default Details;




