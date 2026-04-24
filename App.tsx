import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./src/components/header";
import BodyPage from "./src/components/body-page";
import Footer from "./src/components/footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Hi! Welcome to my Profile" />

      <BodyPage />

      <Footer text="© 2026 My App | All Rights Reserved" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
});