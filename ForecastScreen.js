import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ForecastScreen({ route }) {
  const { forecastData } = route.params;

  const groupedData = forecastData.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
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
      <FlatList
        data={sectionData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.dateSection}>
            <Text style={styles.dateTitle}>{item.title}</Text>
            <FlatList
              data={item.data}
              keyExtractor={(detail, index) => detail.time + index}
              horizontal
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.temperature}>-&gt; {item.temperature}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
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
    padding: 10,
  },
  dateSection: {
    marginBottom: 20,
    borderRadius: 5,
    width: '100%'
  },
  dateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'center',
    color: 'white',
    backgroundColor: '#282828',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#016064',
    borderRadius: 10,
    padding: 5,
  },
  time: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  temperature: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: 'white',
  },
  separator: {
    height: 20,
  },
});


