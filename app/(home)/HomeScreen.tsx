import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

//ScrollView -> Contenedor con scroll, desplazarse por toda la lista sin que nada se corte.

export default function Home() {
  const playlists = [
    { id: 1, name: 'Rock Indie', songs: 50, color: 'bg-red-900' },
    { id: 2, name: 'Indie Nerd', songs: 42, color: 'bg-purple-900' },
    { id: 3, name: 'Rubia', songs: 38, color: 'bg-pink-900' },
    { id: 4, name: 'Traumas (Basta)', songs: 45, color: 'bg-cyan-900' },
    { id: 5, name: 'E <3', songs: 30, color: 'bg-amber-900' },
  ];

  return (
    <View className="flex-1 bg-blue-950">
      <TouchableOpacity
        onPress={() => router.push("/ProfileDetailes")}
        className="absolute top-10 left-5 bg-blue-800 px-3 py-2 rounded-xl shadow-md z-10"
      >
        <Text className="text-white font-bold text-sm">👤</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
        
        <View className="pt-16 pb-6 px-6 items-center bg-blue-900">
          <Text className="text-3xl font-bold text-white mb-3">🎵 Bluefy</Text>
          <AntDesign name="spotify" size={60} color="#60A5FA" className="mb-2" />
          <Text className="text-blue-300 text-center mt-3 text-base">
            Descubre tu música favorita
          </Text>
        </View>

        <View className="px-6 py-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-xl font-bold">Tus Playlists</Text>
            <TouchableOpacity>
              <Text className="text-blue-400 font-semibold">Ver todo</Text>
            </TouchableOpacity>
          </View>

      
          <View className="flex-row flex-wrap justify-between"> 

         
            {playlists.map((playlist) => (
              <TouchableOpacity
                key={playlist.id}
                className="w-[48%] mb-4"
                onPress={() => {
                  if (playlist.name == "Traumas (Basta)") {
                    router.push("/Playlist"); 
                  } else {
                    alert(`Reproduciendo ${playlist.name} 🎶`);
                  }
                }}
              >
                <View className={`${playlist.color} rounded-lg p-4 mb-2 h-40 justify-end`}>
                  <View className="bg-white/20 rounded-md p-2 self-start mb-2">
                    <Text className="text-white font-bold">▶️</Text>
                  </View>
                </View>

                <Text className="text-white font-semibold mb-1" numberOfLines={1}>
                  {playlist.name}
                </Text>
                <Text className="text-gray-400 text-xs">
                  {playlist.songs} canciones
                </Text>
              </TouchableOpacity>

            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}