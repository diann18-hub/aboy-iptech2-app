import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

type Post = {
  id: string;
  name: string;
  avatar: string;
  content: string;
  image?: string;
  liked: boolean;
};

const initialPosts: Post[] = [
  {
    id: "1",
    name: "Dianne",
    avatar: "https://i.pravatar.cc/100?img=12",
    content: "Simple UI is always better 🖤",
    image: "https://picsum.photos/400?1",
    liked: false,
  },
  {
    id: "2",
    name: "Dianne",
    avatar: "https://i.pravatar.cc/100?img=12",
    content: "Less color, more focus.",
    liked: false,
  },
];

const BodyPage = () => {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, liked: !p.liked } : p
      )
    );
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.header}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </View>

          <Text style={styles.content}>{item.content}</Text>

          {item.image && (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}

          <TouchableOpacity onPress={() => toggleLike(item.id)}>
            <Text style={[styles.like, item.liked && styles.liked]}>
              {item.liked ? "❤️ Liked" : "♡ Like"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default BodyPage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f5f5f5",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 8,
  },

  name: {
    fontWeight: "600",
    color: "#111827",
  },

  content: {
    fontSize: 14,
    color: "#111827",
    marginVertical: 5,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 6,
  },

  like: {
    marginTop: 6,
    color: "#6b7280",
    fontSize: 13,
  },

  liked: {
    color: "#e11d48",
  },
});