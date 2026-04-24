import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 18,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  text: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "600",
  },
});