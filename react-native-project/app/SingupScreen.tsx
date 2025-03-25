import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan password tidak boleh kosong');
      return;
    }

    try {
      const response = await fetch('http://your-backend-url/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.success) {
        Alert.alert('Berhasil', 'Akun berhasil dibuat');
        navigation.navigate('Login');
      } else {
        Alert.alert('Pendaftaran Gagal', 'Email sudah terdaftar');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Terjadi Kesalahan', 'Gagal terhubung ke server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pendaftaran</Text>
      <TextInput
        label="Email Address"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignup} style={styles.button}>
        Daftar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  input: { marginBottom: 16 },
  button: { marginTop: 16 },
});

export default SignupScreen;
