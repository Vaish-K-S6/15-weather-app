const API_KEY = "7344b7d4c75031021784c37a329f6b5c";

function getWeather() {
  const city = document.getElementById("city").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        resultDiv.innerHTML = `
          🌍 City: ${data.name} <br>
          🌡 Temperature: ${data.main.temp} °C <br>
          💧 Humidity: ${data.main.humidity}% <br>
          ☁ Condition: ${data.weather[0].description}
        `;
      } else {
        resultDiv.innerHTML = "❌ City not found.";
      }
    })
    .catch(() => {
      resultDiv.innerHTML = "❌ Error fetching data.";
    });
}
