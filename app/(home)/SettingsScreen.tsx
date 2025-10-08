import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl mb-4">Configuración</Text>

      {/* Link de regreso a Bienvenidos */}
      <Link href="/">
        <Text className="text-blue-500 underline text-lg">Volver a Bienvenidos</Text>
      </Link>
    </View>
  );
}


