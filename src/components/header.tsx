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
    backgroundColor: "#2563eb",
    padding: 20,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});