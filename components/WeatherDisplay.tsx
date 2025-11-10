import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WeatherData {
  name: string;
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

interface WeatherDisplayProps {
  data: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
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

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.name}</Text>
      <Ionicons name={weatherIconName(data.weather[0].icon)} size={80} color="#fff" style={styles.icon} />
      <Text style={styles.temperature}>{Math.round(data.main.temp)}°C</Text>
      <Text style={styles.description}>{data.weather[0].description}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Ionicons name="thermometer-outline" size={20} color="#fff" />
          <Text style={styles.detailText}>Cảm giác: {Math.round(data.main.feels_like)}°C</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="water-outline" size={20} color="#fff" />
          <Text style={styles.detailText}>Độ ẩm: {data.main.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="speedometer-outline" size={20} color="#fff" /> {/* Thay thế 'wind-outline' bằng 'speedometer-outline' */}
          <Text style={styles.detailText}>Gió: {data.wind.speed} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginHorizontal: 20,
    width: '90%',
  },
  city: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  icon: {
    marginBottom: 10,
  },
  temperature: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'capitalize',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

export default WeatherDisplay;
