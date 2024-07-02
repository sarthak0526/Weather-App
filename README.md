
# Weather App

This Weather App is built using React Native and provides weather information based on the user's current location or a specific city. The app features navigation between different screens to show current weather, a forecast, and allows the user to input a city name.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screens](#screens)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running on a Device or Emulator](#running-on-a-device-or-emulator)
- [Project Structure](#project-structure)
  - [App.js](#appjs)
  - [SwitchPage.js](#switchpagejs)
  - [HomeScreen.js](#homescreenjs)
  - [CityInput.js](#cityinputjs)
  - [ForecastScreen.js](#forecastscreenjs)
  - [InfoScreen.js](#infoscreenjs)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Features

- **SwitchPage**: Choose between viewing weather for the current location or entering a specific city.
- **HomeScreen**: Displays current weather data for the selected location.
- **CityInput**: Input a city name to fetch weather data.
- **ForecastScreen**: Shows a 5-day weather forecast.
- **InfoScreen**: Provides additional information about the app.

## Technologies Used

- React Native
- Expo
- React Navigation
- OpenWeatherMap API

## Screens

1. **SwitchPage**
2. **HomeScreen**
3. **CityInput**
4. **ForecastScreen**
5. **InfoScreen**

## Getting Started

### Prerequisites

- Node.js
- Expo CLI
- React Native environment set up

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the Expo development server:

```bash
npm start
```

### Running on a Device or Emulator

- Use the Expo app on your Android or iOS device to scan the QR code.
- Alternatively, run the app on an Android emulator or iOS simulator.

## Project Structure

```
/weather-app
│
├── App.js
├── screens/
│   ├── SwitchPage.js
│   ├── HomeScreen.js
│   ├── CityInput.js
│   ├── ForecastScreen.js
│   ├── InfoScreen.js
└── package.json
```

### App.js

Sets up the navigation structure for the app.

### SwitchPage.js

Provides options to navigate to the current location weather or a specific city input.

### HomeScreen.js

Displays weather information based on current location or a specified city.

### CityInput.js

Allows the user to input a city name to fetch weather data.

### ForecastScreen.js

Displays a 5-day weather forecast.

### InfoScreen.js

Provides additional information about the app.

## API Integration

This app uses the OpenWeatherMap API to fetch current weather data and a 5-day weather forecast. Make sure to replace the placeholder API key in the code with your own API key from OpenWeatherMap.

## Screenshots
Home Screen


![1](https://github.com/sarthak0526/weather/assets/92181453/4badf91c-00fa-43eb-a114-c85830565319)


On Press (Current Location)


![2](https://github.com/sarthak0526/weather/assets/92181453/e5371070-501c-4524-8e16-e1845a4b1b5d)


![3](https://github.com/sarthak0526/weather/assets/92181453/d85fe070-dc45-4731-921a-ba3c715fd683)


On Press(5-day Prediction)


![4](https://github.com/sarthak0526/weather/assets/92181453/414dd67e-a15c-4cc5-8455-8d8631b1f5d5)


On Press(Specific Location) at Home Screen


![5](https://github.com/sarthak0526/weather/assets/92181453/912e34bd-1004-453d-852b-64a92061a497)


If wrong Input


![6](https://github.com/sarthak0526/weather/assets/92181453/a06276b2-7c3e-4dba-b3db-f42f40d739c9)


Result Of Specfic Location


![7](https://github.com/sarthak0526/weather/assets/92181453/6c47ebe7-340c-4c67-9caf-38a0973b4d87)


## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Acknowledgments

- React Native documentation
- Expo documentation
- OpenWeatherMap API documentation
