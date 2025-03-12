import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const PetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Virtual Pet</Text>
      <Text style={styles.subtitle}>Take care of your pet by taking your medicine!</Text>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.petImage} />
        <Text style={styles.petName}>Whiskers</Text>
        <Text style={styles.petLevel}>Level 5</Text>
      </View>
      
      <View style={styles.statusContainer}>
        <Text>Health</Text>
        <ProgressBar progress={0.8} color="#1E40AF" style={styles.progressBar} />
        <Text>Happiness</Text>
        <ProgressBar progress={0.9} color="#1E40AF" style={styles.progressBar} />
        <Text>Energy</Text>
        <ProgressBar progress={0.7} color="#1E40AF" style={styles.progressBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9FAFB' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 15, alignItems: 'center' },
  petImage: { width: 300, height: 200, borderRadius: 10 },
  petName: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  petLevel: { fontSize: 16, color: 'blue' },
  statusContainer: { marginTop: 20, backgroundColor: 'white', padding: 15, borderRadius: 10 },
  progressBar: { height: 10, marginVertical: 5, borderRadius: 5 }
});

export default PetScreen;
