import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.greeting}>Hello, John! 👋</Text>
      <Text style={styles.subtitle}>Keep up the great progress!</Text>

      {/* Current Streak */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Streak</Text>
        <Text style={styles.cardNumber}>15 Days</Text>
        <Text style={styles.cardSubtitle}>Keep going! You're doing great!</Text>
      </View>

      {/* Today's Medication */}
      <Text style={styles.sectionTitle}>Today's Medication</Text>
      <View style={styles.medicationCard}>
        <Text style={styles.time}>09:00 AM</Text>
        <View>
          <Text style={styles.medicationName}>Rifampicin</Text>
          <Text style={styles.medicationInfo}>2 tablets</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take Now</Text>
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <Text style={styles.sectionTitle}>Your Progress</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressBox}>
          <Text style={styles.progressNumber}>85%</Text>
          <Text style={styles.progressLabel}>Adherence</Text>
        </View>
        <View style={styles.progressBox}>
          <Text style={styles.progressNumber}>45</Text>
          <Text style={styles.progressLabel}>Days Left</Text>
        </View>
        <View style={styles.progressBox}>
          <Text style={styles.progressNumber}>12</Text>
          <Text style={styles.progressLabel}>Achievements</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  card: {
    backgroundColor: "#1E40AF",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 16,
  },
  cardNumber: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "#FFF",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  medicationCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  time: {
    fontSize: 14,
    color: "gray",
  },
  medicationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  medicationInfo: {
    fontSize: 14,
    color: "gray",
  },
  button: {
    backgroundColor: "#1E40AF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  progressBox: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "30%",
  },
  progressNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressLabel: {
    fontSize: 14,
    color: "gray",
  },
});
