import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ImageBackground, Alert, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import "../global.css";


export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [unaVez, setUnaVez] = useState(true); 

  const handleSignUp = () => {
    if (unaVez) {
      Alert.alert("Cuenta creada");
      setUnaVez(false); 
    }
    console.log("Ingresado con:", email, password);
  };

  const handleLogin = () => {

  };

  return (
    <ImageBackground
      source={require("../assets/images/gojo.png")}
      className="w-screen h-screen flex justify-center items-center"
      resizeMode="cover"
    >
      <View className="bg-black/50 p-10 rounded-2xl w-80 items-center shadow-xl">
        <Text className="text-5xl font-bold text-white mb-6">Hola de nuevo</Text>

        <TextInput
          className="w-full p-3 rounded-xl bg-white border border-gray-300 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full p-3 rounded-xl bg-white border border-gray-300 mb-6"
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          onPress={handleSignUp}
          className="w-full bg-blue-600 p-3 rounded-xl items-center mb-4"
        >
          <Text className="text-white font-bold text-lg">Inicia Sesión</Text>
        </Pressable>

        <View className="w-full items-center mt-2">
          <View className="flex-row justify-between w-full">
            <Text className="text-sm text-gray-300">¿Aun no tienes una cuenta?</Text>
            <Pressable onPress={handleLogin}>
              <Text className="text-sm text-blue-400 font-bold">Registrate</Text>
            </Pressable>
          </View>

          
         
          <TouchableOpacity
          className="bg-blue-200 px-6 py-3 rounded-xl shadow-md mt-3"
          onPress={() => {
          router.push('/HomeScreen');
  }}
>
  <Text className="text-blue-800 font-semibold text-lg text-center">
    Ir a Home 🏠
  </Text>
</TouchableOpacity>
      
        </View>
        </View>

    </ImageBackground>
  );
}

