import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProgressBar } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const kucingImages = [
  require('../../assets/images/kucing/WhatsApp Image 2025-03-13 at 20.29.51.jpeg'),
  require('../../assets/images/kucing/WhatsApp Image 2025-03-13 at 20.29.52(1).jpeg'),
  require('../../assets/images/kucing/WhatsApp Image 2025-03-13 at 20.29.52.jpeg'),
];

interface CatImage {
  id: string;
  source: any;  // atau ImageSourcePropType dari react-native
}

const Pets = () => {
  const [selectedCat, setSelectedCat] = useState<any>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadSelectedCat();
    checkCatChange();
  }, []);

  const loadSelectedCat = async () => {
    try {
      const storedCat = await AsyncStorage.getItem('selectedCat');
      if (storedCat) {
        setSelectedCat(JSON.parse(storedCat));
      } else {
        setModalVisible(true); // Buka modal jika belum ada kucing yang dipilih
      }
    } catch (error) {
      console.error('Error loading cat:', error);
    }
  };

  const handleSelectCat = async (catId: string) => {
    await AsyncStorage.setItem('selectedCat', catId);
    const foundCat = kucingImages.find(cat => cat.toString() === catId);
    if (foundCat) {
      setSelectedCat(foundCat);
    }
    setModalVisible(false);
  };

  const saveSelectedCat = async (catId: string) => {
    try {
      await AsyncStorage.setItem('selectedCat', catId);
    } catch (error) {
      console.error('Error saving cat ID:', error);
    }
  };

  const checkCatChange = async () => {
    try {
      const storedCat = await AsyncStorage.getItem('selectedCat');
      if (storedCat) {
        const { uri, timestamp } = JSON.parse(storedCat);
        const now = new Date().getTime();
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;

        if (now - timestamp >= thirtyDays) {
          const newCat = kucingImages[Math.floor(Math.random() * kucingImages.length)];
          saveSelectedCat(newCat.toString());
        }
      }
    } catch (error) {
      console.error('Error checking cat change:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Virtual Pet</Text>
      <Text style={styles.subtitle}>Take care of your pet by taking your medicine!</Text>

      <View style={styles.card}>
        {selectedCat ? (
          <Image source={selectedCat} style={styles.petImage} />
        ) : (
          <Text>Loading...</Text>
        )}
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

      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}>Let's watch!</Text>
        <WebView 
          source={{ uri: 'https://www.youtube.com/embed/videoseries?list=PLoqQFr74kUdCu9YFQVtkoJ4Vl8EqEa2jt' }}
          style={styles.video}
        />
      </View>

      <TouchableOpacity style={styles.changeCatButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.changeCatText}>Change Cat</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Choose Your Cat</Text>
          <FlatList
            data={kucingImages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectCat(item.toString())}>
                <Image source={item} style={styles.modalImage} />
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
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
  progressBar: { height: 10, marginVertical: 5, borderRadius: 5 },
  changeCatButton: {
    marginTop: 20,
    backgroundColor: '#1E40AF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  changeCatText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  modalImage: { width: 200, height: 150, marginBottom: 10, borderRadius: 10 },
  videoContainer: { 
    marginTop: 20, 
    backgroundColor: 'white', 
    padding: 15, 
    borderRadius: 10,
    height: 250,
  },
  videoTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  video: { 
    flex: 1,
    borderRadius: 10 
  },
});

export default Pets;
