import requests

API_KEY = "7344b7d4c75031021784c37a329f6b5c"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

def get_weather(city):
    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(BASE_URL, params=params)
    data = response.json()

    if response.status_code == 200:
        temperature = data["main"]["temp"]
        humidity = data["main"]["humidity"]
        description = data["weather"][0]["description"]

        print(f"\n🌦 Weather in {city}")
        print("Temperature:", temperature, "°C")
        print("Humidity:", humidity, "%")
        print("Condition:", description)
    else:
        print("❌ City not found or API error.")


if __name__ == "__main__":
    city_name = input("Enter city name: ")
    get_weather(city_name)
