import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';

function WeatherDetails({ route, navigation }) {
  const { city } = route.params;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data for the city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b54496a93f3671ad472a9370f69f850`)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error(error));
  }, [city]);

  if (!weather) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Go Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Weather in {city}</Text>
      <Text style={styles.text}>Temperature: {weather.main.temp}°C</Text>
      <Text style={styles.text}>Condition: {weather.weather[0].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  buttonText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default WeatherDetails;
