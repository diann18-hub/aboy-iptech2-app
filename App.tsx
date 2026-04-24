import React, { useState } from "react";
import { View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import HomePage from "./src/screens/HomePage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <HomePage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </View>
  );
}