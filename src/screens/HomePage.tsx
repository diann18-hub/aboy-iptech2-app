import React from "react";
import { View } from "react-native";
import Header from "../components/header";
import BodyPage from "../components/body-page";
import Footer from "../components/footer";

type Props = {
  onLogout: () => void;
};

const HomePage = ({ onLogout }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Home" onLogout={onLogout} />
      <BodyPage />
      <Footer text="© 2026 Your App" />
    </View>
  );
};

export default HomePage;