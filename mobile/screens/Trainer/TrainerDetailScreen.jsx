import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TrainerDetailScreen({ route, navigation }) {
  const { trainer } = route.params || {};
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#0b1020' }}>
      <Text style={{ color: '#fff', fontSize: 22 }}>{trainer?.name}</Text>
      <Text style={{ color: '#bbb', marginTop: 8 }}>{trainer?.skill}</Text>
      <Text style={{ color: '#bbb', marginTop: 8 }}>Fee: ${trainer?.fee}</Text>
      <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#7b2bff', padding: 12, borderRadius: 8 }} onPress={() => alert('Booking flow placeholder')}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Book Slot</Text>
      </TouchableOpacity>
    </View>
  );
}
