import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from "expo-router";

const ProfileDetailes = () => {
  return (
    <View className="flex-1 bg-sky-100">

    {/* Header */}
    <View className="bg-sky-200 pt-12 pb-8 px-6 items-center">
      <Image 
        source={require('../../assets/images/satoruicon.png')} // ruta corregida
        className="w-24 h-24 rounded-full border-4 border-blue-600 mb-4"
      />
      <Text className="text-white text-2xl font-bold mb-1">
        Eriick
      </Text>
      <Text className="text-blue-300">
        erick@email.com
      </Text>
    </View>

    {/* Contenido */}
    <View className="px-6 py-6">
      
      {/* Botón Editar */}
      <TouchableOpacity className="bg-blue-400 py-3 rounded-full mb-6">
        <Text className="text-white font-semibold text-center">
          Editar perfil
        </Text>
      </TouchableOpacity>

      {/* Opciones */}
      <TouchableOpacity className="bg-blue-200 p-4 rounded-lg mb-3">
        <Text className="text-white">Mis Playlists</Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="bg-blue-200 p-4 rounded-lg mb-3"
       onPress={() => {
                router.push("/SettingsScreen");
              }}
      >

        <Text className="text-white">Configuración</Text>
      </TouchableOpacity>
      
       <TouchableOpacity className="bg-blue-300 p-4 rounded-lg mb-3"
       onPress={() => {
                router.push("/HomeScreen");
              }}
      >
      

        <Text className="text-white font-semibold">Casa</Text>
      </TouchableOpacity>

      {/* Cerrar sesión */}
      <TouchableOpacity 
        className="bg-red-300 p-4 rounded-lg"
        onPress={() => {
          router.push('/'); // navega a la pantalla principal
        }}
      >
        <Text className="text-red-400 font-semibold text-center">
          Cerrar sesión
        </Text>
      </TouchableOpacity>

     

    </View>
  </View>
);
}

export default ProfileDetailes