import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { router } from "expo-router";

export default function Settings() {
  const [notificaciones, setNotificaciones] = React.useState(true);
  const [modoPrivado, setModoPrivado] = React.useState(false);

  return (
    <View className="flex-1 bg-sky-50">
     
      <View className="bg-blue-200 pt-12 pb-6 px-6">
        <Text className="text-white text-2xl font-bold">Configuración</Text>
      </View>

   
      <View className="px-6 py-6">
        
     
        <Text className="text-blue-300 text-sm font-semibold mb-3 uppercase">
          Cuenta
        </Text>
        
        <TouchableOpacity className="bg-blue-900/50 p-4 rounded-lg mb-3 border border-blue-800">
          <Text className="text-white font-semibold mb-1">Editar perfil</Text>
          <Text className="text-cyan-900 text-sm">Nombre, email, foto</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-blue-900/50 p-4 rounded-lg mb-6 border border-blue-800">
          <Text className="text-white font-semibold mb-1">Cambiar contraseña</Text>
          <Text className="text-cyan-900  text-sm">Actualiza tu contraseña</Text>
        </TouchableOpacity>

        {/* Sección Preferencias */}
        <Text className="text-blue-300 text-sm font-semibold mb-3 uppercase">
          Preferencias
        </Text>
        
        <View className="bg-blue-900/50 p-4 rounded-lg mb-3 border border-blue-800 flex-row justify-between items-center">
          <View className="flex-1">
            <Text className="text-white font-semibold mb-1">Notificaciones</Text>
            <Text className="text-cyan-900  text-sm">Recibe alertas de música</Text>
          </View>
          <Switch
            value={notificaciones}
            onValueChange={setNotificaciones}
            trackColor={{ false: "#1e3a8a", true: "#2563eb" }}
            thumbColor={notificaciones ? "#60a5fa" : "#94a3b8"}
          />
        </View>

        <View className="bg-blue-900/50 p-4 rounded-lg mb-6 border border-blue-800 flex-row justify-between items-center">
          <View className="flex-1">
            <Text className="text-white font-semibold mb-1">Modo privado</Text>
            <Text className="text-cyan-900  text-sm">Oculta tu actividad</Text>
          </View>
          <Switch
            value={modoPrivado}
            onValueChange={setModoPrivado}
            trackColor={{ false: "#1e3a8a", true: "#2563eb" }}
            thumbColor={modoPrivado ? "#60a5fa" : "#94a3b8"}
          />
        </View>

        {/* Sección Otros */}
        <Text className="text-blue-300 text-sm font-semibold mb-3 uppercase">
          Otros
        </Text>
        
        <TouchableOpacity className="bg-blue-900/50 p-4 rounded-lg mb-3 border border-blue-800">
          <Text className="text-white font-semibold">Ayuda y soporte</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-blue-900/50 p-4 rounded-lg mb-3 border border-blue-800">
          <Text className="text-white font-semibold">Acerca de</Text>
        </TouchableOpacity>

        <TouchableOpacity
                 onPress={() => {
                  router.push("/ProfileDetailes");
                }}
                className="bg-blue-200 px-3 py-2 rounded-xl shadow-md mb-6 justify-between flex-wrap"
              >
                <Text className="text-blue-800 font-bold text-sm text-center">Regresar</Text>
                </TouchableOpacity>
       
      </View>
    </View>
  );
}

