import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl mb-4">Bienvenido a Home</Text>

      {/* Link a Settings */}
      <Link href="/SettingsScreen">
        <Text className="text-blue-500 underline text-lg">Ir a Settings ⚙️</Text>
      </Link>
    </View>
  );
}