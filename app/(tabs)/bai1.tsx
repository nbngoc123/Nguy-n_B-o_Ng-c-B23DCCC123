import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Bai1() {
    return (
        <>
        <View style={styles.container}>
        <View style={styles.card}>
            <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
            style={styles.avatar}
            />
            <Text style={styles.name}>Nguyen Van Chất</Text>
            <Text style={styles.job}>Lập trình viên</Text>
            <Text style={styles.contact}>chatchoi@earth.com</Text>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },

  card: {
    width: 250,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 20, fontWeight: 'bold' },
  job: { fontSize: 16, marginBottom: 5 },
  contact: { fontSize: 14, color: 'gray' },
});