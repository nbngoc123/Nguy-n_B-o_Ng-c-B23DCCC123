import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground, ScrollView } from 'react-native';
import WeatherDisplay from '../../components/WeatherDisplay';
import WeeklyForecast from '../../components/WeeklyForecast';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = 'a5411576bfe75df6d5ff0ce58bb7c964'; 

export default function TabOneScreen() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherDataAndForecast();
  }, []);

  const fetchWeatherDataAndForecast = async () => {
    try {
      setLoading(true);
      setError(null);
      const city = 'Hanoi';

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=vi`
      );
      if (!weatherResponse.ok) {
        throw new Error('Không thể lấy dữ liệu thời tiết hiện tại. Vui lòng thử lại.');
      }
      const currentWeatherData = await weatherResponse.json();
      console.log('Càassafsfsafsa:', currentWeatherData);

      setWeatherData(currentWeatherData);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=vi`
      );
      if (!forecastResponse.ok) {
        throw new Error('Không thể lấy dữ liệu dự báo thời tiết. Vui lòng thử lại.');
      }
      const weeklyForecastData = await forecastResponse.json();
      setForecastData(weeklyForecastData);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}
      >
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Đang tải dữ liệu thời tiết...</Text>
      </LinearGradient>
    );
  }

  if (error) {
    return (
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        style={styles.container}
      >
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.errorText}>Vui lòng kiểm tra API Key hoặc kết nối mạng.</Text>
      </LinearGradient>
    );
  }

  const background = { uri: 'https://images.unsplash.com/photo-1559900048-0219dd02227b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {weatherData && <WeatherDisplay data={weatherData} />}
          {forecastData && <WeeklyForecast data={forecastData} />}
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: { 
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
