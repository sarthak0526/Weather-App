import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function InfoScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        color="white"
        size={32}
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.infoText}>Weather App</Text>
      <Text style={styles.infoText}>Version : 1.0</Text>
      <Text style={styles.infoText}>Created by Sarthak</Text>
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
  infoText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  goBackButton: {
    position: 'absolute',
    top: 15,
    left: 10,
    
  },
});

export default InfoScreen;
