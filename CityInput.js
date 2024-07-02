import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function CityInput({ navigation }) {
  const [city, setCity] = useState('');

  const handlePress = () => {
    if (city.trim()) {
      navigation.navigate('Home', { city }); // Pass the city to the HomeScreen
    } else {
      alert('Please enter a city name.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}
          start={[0, 0]}
          end={[1, 1]}
        >
          <Text style={styles.buttonText}>Get Weather</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    left: 45
    
  },
  input: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 30,
    fontSize: 22,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CityInput;
