import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="MainScreen" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
