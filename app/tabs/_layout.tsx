import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="signOut/index"
        options={{
          title:'Log Out',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="film-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="datos/index"
        options={{
          title: 'Datos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="construct-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
