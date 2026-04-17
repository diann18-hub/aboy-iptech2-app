// src/screens/Homepage.tsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";

type HomepageProps = {
  title: string;
  subtitle: string;
};

const Homepage: React.FC<HomepageProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1f2937", // dark gray, easy on the eyes
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#4b5563", // softer gray
    textAlign: "center",
  },
});