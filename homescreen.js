import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList, Dimensions,TouchableOpacity } from 'react-native';
import { Card, Button, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const { height } = Dimensions.get('window');

function HomeScreen({ route, navigation }) {
  const { city } = route.params || {}; // Get the city name from route parameters, if any
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeatherDataByCity(city);
    } else {
      fetchWeatherDataByLocation();
    }
  }, [city]);

  const fetchWeatherDataByCity = async (city) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b54496a93f3671ad472a9370f69f850`);
      const weatherData = await response.json();
      setWeatherData(weatherData);

      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6b54496a93f3671ad472a9370f69f850`);
      const forecastData = await response2.json();
      setForecastData(forecastData.list);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  const fetchWeatherDataByLocation = async () => {
    setIsLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6b54496a93f3671ad472a9370f69f850`);
      const weatherData = await response.json();
      setWeatherData(weatherData);

      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=6b54496a93f3671ad472a9370f69f850`);
      const forecastData = await response2.json();
      setForecastData(forecastData.list);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  const weatherDetails = weatherData
    ? [
        { icon: 'thermometer-outline', label: 'Temperature', value: `${(weatherData.main.temp - 273.15).toFixed(2)}°C` },
        { icon: 'cloud-outline', label: 'Weather', value: weatherData.weather[0].description },
        { icon: 'water-outline', label: 'Humidity', value: `${weatherData.main.humidity}%` },
        { icon: 'flag-outline', label: 'Wind Speed', value: `${weatherData.wind.speed} m/s` },
        { icon: 'speedometer-outline', label: 'Pressure', value: `${weatherData.main.pressure} hPa` },
        { icon: 'rainy-outline', label: 'Rain', value: weatherData.rain ? `${weatherData.rain['1h']} mm` : 'No rain' },
        { icon: 'eye-outline', label: 'Visibility', value: `${weatherData.visibility} meters` },
        { icon: 'cloudy-night-outline', label: 'Cloudiness', value: `${weatherData.clouds.all}%` },
      ]
    : [];

  const locationWords = weatherData ? weatherData.name.split(' ') : [];
  const locationTop = locationWords.length > 1 ? '5%' : '10%';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <IconButton
        icon="refresh"
        color="#ffffff"
        size={30}
        style={styles.refreshButton}
        onPress={() => (city ? fetchWeatherDataByCity(city) : fetchWeatherDataByLocation())}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        weatherData && (
          <>
            <Text style={[styles.locationText, { top: locationTop }]}>{weatherData.name}</Text>
            <Card style={styles.card}>
              <Card.Content>
                <FlatList
                  data={weatherDetails}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.row}>
                      <Ionicons name={item.icon} size={44} color="black" />
                      <Text style={styles.label}>
                        {item.label}:
                      </Text>
                      <Text style={styles.value}>
                        {item.value}
                      </Text>
                    </View>
                  )}
                  ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                  ListFooterComponent={() => (
                    <Button
                      mode="contained"
                      onPress={() => navigation.navigate('Forecast', { forecastData })}
                      style={styles.button}
                    >
                      <Text style={styles.ButtonText}>Show 5 Day Prediction</Text>
                    </Button>
                  )}
                />
              </Card.Content>
            </Card>
          </>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 50,
  },
  locationText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    left: '5%',
    flexWrap: 'wrap',
    textAlign: 'left',
    width: '90%',
  },
  card: {
    height: height * 0.75,
    width: '100%',
    backgroundColor: '#879CAA',
    padding: 0,
    marginTop: 180,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  value: {
    fontSize: 24,
    lineHeight: 75,
    marginLeft: 5,
  },
  button: {
    width: '95%',
    marginTop: 20,
    marginBottom: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  ButtonText: {
    color: "#000000",
    fontSize: 21,
  },
  refreshButton: {
    position: 'absolute',
    top: 2,
    right: 10,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1, // Ensure the button is above other content
  },
});

export default HomeScreen;
