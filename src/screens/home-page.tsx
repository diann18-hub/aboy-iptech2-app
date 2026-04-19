// src/screens/Homepage.tsx
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

type HomepageProps = {
  title: string;
  subtitle: string;
};

const Homepage = ({ title, subtitle }: HomepageProps) => {
  return (
    <View style={styles.container}>
      {/* Profile Card */}
      <View style={styles.card}>
        
        {/* Avatar */}
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />

        {/* Name */}
        <Text style={styles.title}>{title}</Text>

        {/* Bio / Subtitle */}
        <Text style={styles.subtitle}>{subtitle}</Text>

        {/* Extra Info */}
        <Text style={styles.extraText}>
          React Native Beginner  | Future Dev💻
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginTop: 4,
    textAlign: "center",
  },
  extraText: {
    fontSize: 14,
    color: "#9ca3af",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 999,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});