import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TrainerCard from '../../components/TrainerCard';

const SAMPLE = [
  { id: '1', name: 'Alice', skill: 'Yoga', fee: 25 },
  { id: '2', name: 'Bob', skill: 'Fitness', fee: 30 }
];

export default function TrainerListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 12, backgroundColor: '#0b1020' }}>
      <FlatList data={SAMPLE} keyExtractor={(i) => i.id} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TrainerDetail', { trainer: item })}>
          <TrainerCard trainer={item} />
        </TouchableOpacity>
      )} />
    </View>
  );
}
