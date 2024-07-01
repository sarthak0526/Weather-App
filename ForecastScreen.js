import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ForecastScreen({ route }) {
  const navigation = useNavigation();
  const { forecastData } = route.params;

  const formatDate = (date) => {
    const day = new Date(date).getDate();
    const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
    const options = { month: 'long' };
    const month = new Date(date).toLocaleDateString('en-US', options);
    return `${day}${suffix} ${month}`;
  };

  const groupedData = forecastData.reduce((acc, item) => {
    const date = formatDate(item.dt * 1000);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push({
      time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
      temperature: `${(item.main.temp - 273.15).toFixed(2)}°C`,
      description: item.weather[0].description,
    });
    return acc;
  }, {});

  const sectionData = Object.keys(groupedData).map(date => ({
    title: date,
    data: groupedData[date],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Prediction</Text>
      </View>
      <FlatList
        data={sectionData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.dateSection}>
            <View style={styles.dateHeader}>
              <Text style={styles.dateTitle}>{item.title}</Text>
            </View>
            <FlatList
              data={item.data}
              keyExtractor={(detail, index) => detail.time + index}
              horizontal
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.temperature}>Temp: {item.temperature}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  dateSection: {
    backgroundColor: 'black',
    borderRadius: 12,
    marginBottom: 10,
  },
  dateHeader: {
    backgroundColor: '#003366',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 6,
    marginBottom: 8,
  },
  dateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#ADD8E6',
    borderRadius: 12,
    padding: 10,
    width: 180,
    marginBottom: 5,
    marginLeft: 1,
    marginEnd: 1,
  },
  time: {
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: 'black',
  },
  separator: {
    height: 20,
  },
});
