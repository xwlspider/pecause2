import { Stack } from 'expo-router';

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ 
      headerShown:false
    }}>
      
      <Stack.Screen 
        name="HomeScreen" 
        options={{ title: "Home"
        }}
    
      />
      <Stack.Screen 
        name="SettingsScreen" 
        options={{ title: "Configuraciones"
         }}
      />
    </Stack>
  );
}

export default HomeLayout;