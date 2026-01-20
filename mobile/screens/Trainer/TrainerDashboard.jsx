import React from 'react';
import { View, Text } from 'react-native';

export default function TrainerDashboard() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#0b1020' }}>
      <Text style={{ color: '#fff', fontSize: 22 }}>Trainer Dashboard</Text>
      <Text style={{ color: '#bbb', marginTop: 8 }}>Bookings and availability management go here.</Text>
    </View>
  );
}
