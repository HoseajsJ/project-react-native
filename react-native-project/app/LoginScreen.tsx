import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { router } from 'expo-router';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password harus diisi");
      return;
    }
  
    try {
      const response = await fetch("http://192.168.1.14:5000/login", { // Ganti dengan IP lokal
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Login Gagal", data.message || "Email atau password salah");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Terjadi Kesalahan", "Gagal terhubung ke server");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

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

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Sign In
      </Button>

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.socialContainer}>
        <Button icon="google" mode="outlined" style={styles.socialButton}>
          Google
        </Button>
        <Button icon="facebook" mode="outlined" style={styles.socialButton}>
          Facebook
        </Button>
      </View>

      <Button
        mode="text"
        onPress={() => router.push('/SingupScreen')}
        style={styles.signupButton}
      >
        Don't have an account? Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8FAFB",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1A3C40",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#5A5A5A",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 15,
    borderRadius: 10,
  },
  forgotText: {
    color: "#1A3C40",
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#28a745",
    padding: 5,
    borderRadius: 10,
  },
  orText: {
    marginVertical: 15,
    color: "#5A5A5A",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  signupButton: {
    marginTop: 20,
  },
});

export default LoginScreen;
