import React from 'react';
import { View, Text } from 'react-native';

export default function TrainerCard({ trainer }) {
  return (
    <View style={{ backgroundColor: '#11121a', padding: 14, borderRadius: 12, marginBottom: 12 }}>
      <Text style={{ color: '#fff', fontWeight: '700' }}>{trainer.name}</Text>
      <Text style={{ color: '#aaa' }}>{trainer.skill} • ${trainer.fee}</Text>
    </View>
  );
}
