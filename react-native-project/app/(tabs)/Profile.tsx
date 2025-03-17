import { View, Text, Image, ProgressBarAndroid, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* Profile Section */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} 
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>Lutfi Ahmad</Text>
        <Text style={{ color: "gray" }}>Treatment Day 45 of 180 (contoh)</Text>
      </View>

      {/* Progress Bar */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Treatment Progress</Text>
        <View style={{ height: 10, backgroundColor: "#ddd", borderRadius: 5, marginTop: 5 }}>
          <View style={{ width: "25%", height: "100%", backgroundColor: "#4A90E2", borderRadius: 5 }} />
        </View>
        <Text style={{ textAlign: "right", marginTop: 5 }}>25% Complete</Text>
      </View>

      {/* Medication Details */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Medication Details</Text>
        <View style={{ backgroundColor: "#F5F5F5", padding: 15, borderRadius: 10, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Rifampicin</Text>
          <Text style={{ color: "gray" }}>2 tablets daily</Text>
          <Text style={{ color: "#4A90E2", fontWeight: "bold", marginTop: 5 }}>9:00 AM</Text>
        </View>
      </View>

      {/* Settings */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Settings</Text>
        <View style={{ backgroundColor: "#F5F5F5", padding: 15, borderRadius: 10, marginTop: 5 }}>
          <TouchableOpacity style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 16 }}>Reminders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 16 }}>Personal Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
