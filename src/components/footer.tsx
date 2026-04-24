import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  text: string;
};

const Footer = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#111827",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 12,
  },
});