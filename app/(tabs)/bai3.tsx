import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


export default function Bai3() {
    const [color, setColor] = useState("#000000ff");
    const doimau = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        setColor(randomColor + 'ff'); 
    }
    const bgColor = {
        backgroundColor: color, 
        borderColor: color,
        // color: color
    }
    return (
        <>
            <View style={styles.container}>
                <View style={[styles.card, bgColor]}>
                    <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                    style={styles.avatar}
                    />
                    <Text style={[styles.name, bgColor]}>Handsome</Text>
                </View>
                <View style={styles.button}>
                <Button title="Đổi màu" onPress={doimau} />
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
    alignItems: 'center',
    shadowColor: '#3e3c3cff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 20, fontWeight: 'bold' },
  job: { fontSize: 16, marginBottom: 5 },
  contact: { fontSize: 14, color: 'gray' },
  button: {
        marginVertical: 10,
        width: '50%',
    },
});