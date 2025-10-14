import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Linking } from "react-native";
import { router } from "expo-router";

export default function Playlist() {

  // Función para abrir links en YouTube
  const abrirLink = (link: string): void => {
    Linking.openURL(link); // Esto abre el enlace
  };

  // Lista de canciones
  const songs: { id: number; title: string; link: string }[] = [
    { id: 1, title: "Traitor - Olivia Rodrigo", link: "https://www.youtube.com/watch?v=6mS5y2r0w0w" },
    { id: 2, title: "Vampire - Olivia Rodrigo", link: "https://www.youtube.com/watch?v=FgY3HcD1jT8" },
    { id: 3, title: "All Too Well (10 min) - Taylor Swift", link: "https://www.youtube.com/watch?v=tollGa3S0o8" },
    { id: 4, title: "Back to December - Taylor Swift", link: "https://www.youtube.com/watch?v=QUwxKWT6m7U" },
  ];

  return (
    <View className="flex-1 bg-blue-950">
      
      {/* Header */}
      <View className="bg-blue-800 py-10 px-6">
        <Text className="text-white text-3xl font-bold text-center">🎶 Traumas (Basta)</Text>
        <Text className="text-blue-200 text-center mt-2">
          Taylor Swift & Olivia Rodrigo
        </Text>
      </View>

      {/* Lista de canciones */}
      <ScrollView className="px-6 mt-6">
        {songs.map((song) => (
          <TouchableOpacity
            key={song.id}
            onPress={() => abrirLink(song.link)}
            className="bg-blue-900/60 p-4 mb-3 rounded-lg"
          >
            <Text className="text-white text-lg font-semibold">{song.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => router.push("/HomeScreen")}
        className="bg-blue-600 py-4 m-6 rounded-2xl"
      >
        <Text className="text-white font-bold text-center text-lg">↩️</Text>
      </TouchableOpacity>
    </View>
  );
}