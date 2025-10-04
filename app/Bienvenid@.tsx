import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ImageBackground } from "react-native";
import "../global.css";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    console.log("Sign Up with:", email, password);
    // Aquí iría la lógica de Firebase
  };


  return (
<ImageBackground
      source={require("../assets/images/gojo.png")}
      className="w-screen h-screen flex justify-center items-center"
      resizeMode="cover"
    > 
    
      <View className="bg-black/50 p-10 rounded-2xl w-80 items-center shadow-xl">
        <Text className="text-5xl font-bold text-white mb-6">Sign Up</Text>

        <TextInput
          className="w-full p-3 rounded-xl bg-white border border-gray-300 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full p-3 rounded-xl bg-white border border-gray-300 mb-6"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          onPress={handleSignUp}
          className="w-full bg-blue-600 p-3 rounded-xl items-center mb-4"
        >
          <Text className="text-white font-bold text-lg">Create Account</Text>
        </Pressable>

        <View className="flex-row justify-between w-full">
          <Text className="text-sm text-gray-300">¿Aun no tienes una cuenta?</Text>
          <Pressable>
            <Text className="text-sm text-blue-400 font-bold">Registrate</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
