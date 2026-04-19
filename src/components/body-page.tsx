import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

type Props = {
  name: string;
  course: string;
  message: string;
};

const images = [
  "https://picsum.photos/200/200?1",
  "https://picsum.photos/200/200?2",
  "https://picsum.photos/200/200?3",
  "https://picsum.photos/200/200?4",
  "https://picsum.photos/200/200?5",
  "https://picsum.photos/200/200?6",
  "https://picsum.photos/200/200?7",
  "https://picsum.photos/200/200?8",
  "https://picsum.photos/200/200?9",
];

const BodyPage = ({ name, course, message }: Props) => {
  return (
    <View style={styles.container}>

      {/* PROFILE HEADER */}
      <View style={styles.profileBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.course}>{course}</Text>

        <Text style={styles.message}>{message}</Text>

        {/* STATS */}
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNum}>120</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNum}>5.4K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNum}>300</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* GALLERY TITLE */}
      <Text style={styles.title}>📸 My Gallery</Text>

      {/* PHOTO GRID */}
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />

    </View>
  );
};

export default BodyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    padding: 10,
  },

  // PROFILE
  profileBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },

  course: {
    fontSize: 13,
    color: "#6b7280",
  },

  message: {
    fontSize: 13,
    color: "#4b5563",
    textAlign: "center",
    marginTop: 5,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
  },

  stat: {
    alignItems: "center",
  },

  statNum: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  statLabel: {
    fontSize: 12,
    color: "#9ca3af",
  },

  // GALLERY
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#111827",
  },

  image: {
    width: "32%",
    height: 110,
    margin: 2,
    borderRadius: 10,
  },
});