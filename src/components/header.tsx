import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

type Props = {
  title: string;
  onLogout: () => void;
};

const Header = ({ title, onLogout }: Props) => {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          Alert.alert("Success", "Logged out successfully");

          // delay so alert shows before logout
          setTimeout(() => {
            onLogout();
          }, 500);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  text: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "600",
  },
  logout: {
    color: "#e11d48",
    fontWeight: "600",
  },
});