import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

interface Task {
  id: string;
  name: string;
}

export default function Bai4() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (!taskText.trim()) return; 
    const newTask: Task = {
      id: Date.now().toString(),
      name: taskText,
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.name}</Text>
      <Button title="X" onPress={() => removeTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc mới"
          value={taskText}
          onChangeText={setTaskText}
        />
        <Button title="Thêm" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        ListEmptyComponent={<Text style={{ color: '#888' }}>Chưa có công việc nào</Text>}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF", marginTop: 50 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  inputRow: { flexDirection: 'row', marginBottom: 15, alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 10, height: 40, marginRight: 10 },
  list: { flex: 1 },
  taskItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 10 },
  taskText: { fontSize: 16 },
});
