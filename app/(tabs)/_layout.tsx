import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="bai1"
        options={{
          title: 'Bài 1',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="00.circle.fill.ar" color={color} />,
        }}
      />

      <Tabs.Screen
        name="bai2"
        options={{
          title: 'Bài 2',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="checkmark.circle.badge.xmark.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="bai3"
        options={{
          title: 'Bài 3',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="0.circle" color={color} />,
        }}
      />

      <Tabs.Screen
        name="bai4"
        options={{
          title: 'Bài 4',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="0.square" color={color} />,
        }}
      />
    </Tabs>
  );
}
