import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

interface WeeklyForecastProps {
  data: {
    list: ForecastItem[];
  };
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ data }) => {

  const dailyForecasts = data.list.filter((item, index, self) =>
    index === self.findIndex(t =>
      moment.unix(t.dt).format('YYYY-MM-DD') === moment.unix(item.dt).format('YYYY-MM-DD')
    )
  ).slice(0, 6); 

  const weatherIconName = (iconCode: string) => {
    switch (iconCode) {
      case '01d': return 'sunny';
      case '01n': return 'moon';
      case '02d': return 'cloudy';
      case '02n': return 'cloudy-night';
      case '03d':
      case '03n':
      case '04d':
      case '04n': return 'cloud';
      case '09d':
      case '09n':
      case '10d':
      case '10n': return 'rainy';
      case '11d':
      case '11n': return 'thunderstorm';
      case '13d':
      case '13n': return 'snow';
      case '50d':
      case '50n': return 'cloudy';
      default: return 'cloud';
    }
  };

  const renderForecastItem = ({ item }: { item: ForecastItem }) => (
    <View style={styles.forecastItem}>
      <Text style={styles.date}>{moment.unix(item.dt).format('ddd, DD/MM')}</Text>
      <Ionicons name={weatherIconName(item.weather[0].icon)} size={30} color="#fff" />
      <Text style={styles.temp}>{Math.round(item.main.temp)}°C</Text>
      <Text style={styles.description}>{item.weather[0].description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dự báo 6 ngày tới</Text>
      <FlatList
        data={dailyForecasts}
        renderItem={renderForecastItem}
        keyExtractor={(item) => item.dt.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  flatListContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forecastItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
  },
  date: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  temp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#fff',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default WeeklyForecast;
