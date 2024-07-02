// SwitchPage.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function SwitchPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weather</Text>
      <Card style={styles.card}>
        <Card.Content>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Current Location</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CityInput')}
          >
            <Text style={styles.buttonText}>Specific Location</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      {/* Info Icon */}
      <IconButton
        icon="information-outline"
        color="#fff"
        size={30}
        style={styles.infoIcon}
        onPress={() => navigation.navigate('InfoScreen')}
      />
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
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 26,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  heading: {
    position: 'absolute',
    top: 25,
    left: 20,
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  infoIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default SwitchPage;
