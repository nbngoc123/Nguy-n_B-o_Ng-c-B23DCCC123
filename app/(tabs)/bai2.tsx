import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Text as RNText } from 'react-native';

export default function Bai2() {
  const [toan, setToan] = useState('');
  const [ly, setLy] = useState('');
  const [hoa, setHoa] = useState('');
  const [diemTB, setDiemTB] = useState<number | null>(null);

  const tinhDiem = () => {
    const t = parseFloat(toan);
    const l = parseFloat(ly);
    const h = parseFloat(hoa);
    setDiemTB((t + l + h) / 3);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập điểm Toán"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={toan}
        onChangeText={setToan}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập điểm Lý"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={ly}
        onChangeText={setLy}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập điểm Hóa"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={hoa}
        onChangeText={setHoa}
      />
      <View style={styles.button}>
        <Button title="Tính điểm TB" onPress={tinhDiem} />
      </View>
      {diemTB && (
        <RNText style={styles.result}>Điểm trung bình: {diemTB.toFixed(2)}</RNText>
      )}
    </View>
  );
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',

    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    button: {
        marginVertical: 10,
        width: '50%',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    });
