# Weather App

This React Native application provides current weather conditions and a five-day forecast for the user's location using data from the OpenWeatherMap API. The app consists of two main screens: the Home Screen, which displays current weather information, and the Forecast Screen, which shows detailed forecasts.

## Features

- **Current Weather**: Displays temperature, weather description, humidity, wind speed, pressure, rain, visibility, and cloudiness.
- **Five-Day Forecast**: Provides weather predictions for the next five days, with detailed data for each time segment.
- **Location-Based**: Automatically fetches weather data based on the user's current location.
- **Refresh Option**: Allows users to refresh the weather data.

## Screens

- **Home Screen**: Shows current weather conditions with options to refresh data and navigate to the forecast screen.
- **Forecast Screen**: Displays a detailed five-day weather forecast with hourly updates.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

## Dependencies

- `react-native-gesture-handler`
- `@react-navigation/native`
- `@react-navigation/stack`
- `expo-location`
- `react-native-paper`
- `@expo/vector-icons`

## Usage

1. Open the app on your mobile device.
2. Allow location permissions when prompted.
3. View current weather data on the Home Screen.
4. Tap "Show 5 Days Prediction" to view the forecast.

## API

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You need to replace the API key in `HomeScreen.js` with your own key.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss any changes.

---

Feel free to modify the content as needed for your specific project details.
