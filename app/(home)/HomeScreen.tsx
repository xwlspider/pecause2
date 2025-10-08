import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text className="text-3xl font-bold mb-6 text-blue-700">Bienvenido a Home</Text>

      <TouchableOpacity
        className="bg-blue-200 px-6 py-3 rounded-xl shadow-md"
        onPress={() => {
          router.push('/SettingsScreen');
        }}
      >
        <Text className="text-blue-800 font-semibold text-lg text-center">
          Ir a Settings ⚙️
        </Text>
      </TouchableOpacity>
    </View>
  );
}