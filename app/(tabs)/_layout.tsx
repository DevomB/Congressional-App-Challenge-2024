import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 11 }, // Adjust the font size here
        tabBarStyle: { 
          paddingBottom: 20, // Adds space below the navigation bar
          height: 70, // Adjust the height of the nav bar if necessary
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} size={40} style={{}} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Folders',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'folder' : 'folder-outline'} color={color} size={40} style={{}} />
          ),
        }}
      />
      <Tabs.Screen
        name="flashScreen"
        options={{
          title: 'Flashcards',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'file-tray-full' : 'file-tray-full-outline'} color={color} size={40} style={{}} />
          ),
        }}
      />
    </Tabs>
  );
}
