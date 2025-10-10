import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  return (
    <View className="flex-1 bg-blue-100"> 
    <TouchableOpacity
        onPress={() => {
          router.push("/SettingsScreen");
        }}
        className="absolute top-10 left-5 bg-blue-200 px-3 py-2 rounded-xl shadow-md"
      >
        <Text className="text-blue-800 font-bold text-sm">⚙️</Text>
      </TouchableOpacity>

      <View className="flex-1 justify-center items-center">
        <Text className="text-4xl font-bold text-blue-800 mb-4">
          🎵 Bienvenido a Bluefy
        </Text>

        <AntDesign name="spotify" size={100} color="#60A5FA" className="mb-6" />

        <Text className="text-blue-700 text-center px-10 text-lg mb-6">
          Disfruta de tu música favorita en Bluefy.
        </Text>

        <TouchableOpacity
          className="bg-blue-300 px-8 py-3 rounded-2xl shadow-md"
          onPress={() => alert("Reproduciendo tu playlist 🎶")}
        >
          <Text className="text-blue-900 font-bold text-lg">▶️ Reproducir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}