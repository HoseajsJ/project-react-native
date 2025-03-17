import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Hospitals = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subtitle}>Find TB treatment centers near you</Text>
        <TextInput style={styles.searchBox} placeholder="Search hospitals..." />
      </View>

      {/* Hospital List */}
      <View style={styles.hospitalCard}>
        <Image source={{ uri: 'https://source.unsplash.com/300x200/?hospital' }} style={styles.hospitalImage} />
        <View style={styles.hospitalInfo}>
          <Text style={styles.hospitalName}>RS Paru Dr. M. Goenawan Partowidigdo</Text>
          <Text style={styles.hospitalDistance}>2.5 km away</Text>
          <Text style={styles.hospitalAddress}>Jl. Raya Puncak KM. 83, Cisarua, Bogor</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Pulmonology</Text>
            <Text style={styles.tag}>TB Treatment</Text>
            <Text style={styles.tag}>Respiratory Care</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.directionsButton}>
              <Text style={styles.buttonText}>Directions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.buttonTextWhite}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Emergency Contacts (Pindah ke tengah) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Emergency Medical Services</Text>
          <Text style={styles.contactNumber}>119</Text>
        </View>
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>TB Care Hotline</Text>
          <Text style={styles.contactNumber}>1-500-803</Text>
        </View>
      </View>

      {/* Google Maps (Paling bawah) */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.5563,
          longitude: 107.4322,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: -6.5563, longitude: 107.4322 }} title="RS Paru Dr. M. Goenawan" />
      </MapView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  header: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#222' },
  subtitle: { fontSize: 14, color: '#777' },
  searchBox: { backgroundColor: '#EEE', padding: 10, borderRadius: 10, marginTop: 10 },
  section: { paddingHorizontal: 20, marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  contactCard: { backgroundColor: '#FF6B6B', padding: 15, borderRadius: 10, marginBottom: 10 },
  contactTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  contactNumber: { color: '#FFF', fontSize: 14 },
  hospitalCard: { backgroundColor: '#FFF', borderRadius: 10, margin: 20, padding: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  hospitalImage: { width: '100%', height: 150, borderRadius: 10 },
  hospitalInfo: { marginTop: 10 },
  hospitalName: { fontSize: 18, fontWeight: 'bold' },
  hospitalDistance: { fontSize: 14, color: '#777' },
  hospitalAddress: { fontSize: 14, color: '#777', marginBottom: 10 },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: { backgroundColor: '#EEE', padding: 5, borderRadius: 5, marginRight: 5, marginBottom: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  callButton: { backgroundColor: '#EEE', padding: 10, borderRadius: 5, flex: 1, alignItems: 'center', marginRight: 5 },
  directionsButton: { backgroundColor: '#EEE', padding: 10, borderRadius: 5, flex: 1, alignItems: 'center', marginRight: 5 },
  bookButton: { backgroundColor: '#2C5DF4', padding: 10, borderRadius: 5, flex: 1, alignItems: 'center' },
  buttonText: { color: '#222', fontWeight: 'bold' },
  buttonTextWhite: { color: '#FFF', fontWeight: 'bold' },
  map: { width: '90%', height: 200, alignSelf: 'center', borderRadius: 10, marginVertical: 20 },
});

export default Hospitals;
