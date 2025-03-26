import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan password harus diisi');
      return;
    }

    // Handle sign up logic here
    console.log('Sign Up dengan:', email, password);
    router.replace('/Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        label="Email Address"
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={async () => {
          try {
            // Proses signup
            await handleSignUp();  // fungsi signup Anda
            // Jika berhasil, arahkan ke home
            router.replace('/(tabs)/Profile');
          } catch (error) {
            // Handle error
            console.error('Signup failed:', error);
          }
        }}
        style={styles.button}
      >
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F8FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1A3C40',
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#28a745',
    borderRadius: 10,
  },
});

export default SignUpScreen;
